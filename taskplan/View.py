import shutil

from taskconf.config.Configuration import Configuration

from taskplan.TaskWrapper import TaskWrapper

try:
  from pathlib2 import Path
except ImportError:
  from pathlib import Path

class Node:
    def __init__(self):
        self.children = {}
        self.parent = None
        self.parent_key = ""

    def set_child(self, key, child):
        self.children[key] = child
        child.parent = self
        child.parent_key = key

    def insert_as_parent(self, key, new_parent):
        self.parent.set_child(self.parent_key, new_parent)
        if key is not None:
            new_parent.set_child(key, self)

    def remove(self):
        assert (len(self.children) == 1)
        key = list(self.children.keys())[0]

        child = self.children[key]
        self.parent.children[self.parent_key] = child
        child.parent = self.parent
        child.parent_key = self.parent_key
        return key

    def remove_subtree(self):
        del self.parent.children[self.parent_key]

    def get_first_task_in(self):
        if len(self.children.keys()) > 0:
            return self.children[list(self.children.keys())[0]].get_first_task_in()
        else:
            return None

    def get_all_contained_tasks(self):
        tasks = []
        for child in self.children.values():
            tasks.extend(child.get_all_contained_tasks())
        return tasks

class RootNode(Node):
    def __init__(self):
        Node.__init__(self)

class ParamNode(Node):
    def __init__(self, param):
        Node.__init__(self)
        self.param = param

class CodeVersionNode(Node):
    def __init__(self):
        Node.__init__(self)

class GroupNode(Node):
    def __init__(self, params):
        Node.__init__(self)
        self.params = params

class CollapseNode(Node):
    def __init__(self, param, collapse_sorting):
        Node.__init__(self)
        self.param = param
        self.collapse_sorting = collapse_sorting

    def primary_child(self):
        tasks = self.get_all_contained_tasks()
        tasks = sorted(tasks, key=lambda task: task.col_from_task(self.collapse_sorting[0], [""]), reverse=self.collapse_sorting[1])
        return tasks[0]

class TasksNode(Node):
    def __init__(self, collapse):
        Node.__init__(self)
        self.collapse = collapse

    def get_first_task_in(self):
        if len(self.children.keys()) > 0:
            return self.children["0"]
        else:
            return None

    def get_all_contained_tasks(self):
        return self.children.values()

class BranchingOption:
    def __init__(self, force=False):
        self.force = force

class GroupBranch(BranchingOption):
    def __init__(self, params, configuration):
        super().__init__()
        self.params = params
        self.configuration = configuration

    def key_from_task(self, task):
        group_name = []
        for param in self.params:
            key = task.get_param_value_key_to_param(param, self.configuration)
            group_name.append(key)
        group_name = " / ".join(group_name)
        return group_name

    def exists_node(self, node):
        node_exists = type(node) == GroupNode and node.params == self.params
        return node_exists

    def create_new_node(self):
        return GroupNode(self.params)


class ParamBranch(BranchingOption):
    def __init__(self, param, configuration, force):
        super().__init__(force)
        self.param = param
        self.configuration = configuration

    def key_from_task(self, task):
        if self.param.get_metadata("deprecated_param_value") == "":
            return None
        else:
            return task.get_param_value_key_to_param(self.param, self.configuration)

    def exists_node(self, node):
        #if self.param.get_metadata("deprecated_param_value") == "":
        #    return None, None
        node_exists = type(node) == ParamNode and node.param == self.param

        return node_exists

    def create_new_node(self):
        return ParamNode(self.param)

class CodeVersionBranch(BranchingOption):
    def __init__(self, mode, version_control):
        super().__init__()
        self.version_control = version_control
        self.mode = mode

    def key_from_task(self, task):
        commit_id = task.most_recent_code_version()
        if commit_id is None:
            commit_id = self.version_control.current_commit_id

        if self.mode == "label":
            return self.version_control.get_label(commit_id)
        else:
            return commit_id[:7]

    def exists_node(self, node):
        node_exists = type(node) == CodeVersionNode
        return node_exists

    def create_new_node(self):
        return CodeVersionNode()


class CollapseBranch(ParamBranch):
    def __init__(self, param, configuration, collapse_sorting):
        super().__init__(param, configuration, False)
        self.collapse_sorting = collapse_sorting

    def exists_node(self, node):
        node_exists = type(node) == CollapseNode and node.param == self.param
        return node_exists

    def create_new_node(self):
        return CollapseNode(self.param, self.collapse_sorting)


class View:

    def __init__(self, configuration, root, branch_options, filters, version_control, collapse_multiple_tries, enabled=True):
        self.configuration = configuration
        self.branch_options = branch_options
        self.filters = filters
        self.enabled = enabled

        self.collapse_multiple_tries = collapse_multiple_tries
        self.root_node = RootNode()
        self.root_node.set_child("default", TasksNode(self.collapse_multiple_tries))
        self.set_path(root)
        self.task_by_uuid = {}
        self.version_control = version_control

    def set_path(self, path):
        self.root_path = path
        if self.root_path is not None:
            self.root_path.mkdir(exist_ok=True, parents=True)

    def set_branch_options(self, branch_options, tasks):
        self.branch_options = branch_options
        self.refresh(tasks)

    def refresh(self, tasks):
        if self.enabled:
            self.root_node = RootNode()
            self.root_node.set_child("default", TasksNode(self.collapse_multiple_tries))

            for task in tasks:
                self.add_task(task, False)

            if self.root_path is not None:
                self._check_filesystem(self.root_node.children["default"], self.root_path)

    def _insert_new_node(self, task, node, branching_option, key, path, change_dirs):
        if not branching_option.force:
            first_task = node.get_first_task_in()
            if first_task is None:
                return None

            former_key = branching_option.key_from_task(first_task)
            if former_key == key:
                return None
        else:
            former_key = None

        new_node = branching_option.create_new_node()
        node = self._add_node_before_node(node, new_node, former_key, path, change_dirs)
        return node

    def _filter_task(self, task):
        select = True
        for param_uuid in self.filters.keys():
            if param_uuid == "tags":
                found = False
                for tag in self.filters[param_uuid]:
                    if tag[0] in task.tags:
                        found = True
                        break
            elif param_uuid == "versions":
                commit_id = task.most_recent_code_version()
                if commit_id is None:
                    commit_id = self.version_control.current_commit_id
                found = self.version_control.get_label(commit_id) in [f[0] for f in self.filters[param_uuid]]
            else:
                key, args, param_value = task.get_param_value_to_param(self.configuration.get_config(param_uuid), self.configuration)

                found = False
                for possible_value in self.filters[param_uuid]:
                    if str(param_value.uuid) == possible_value[0] and args == possible_value[1:]:
                        found = True
                        break

            if not found:
                select = False
                break

        return select

    def add_task(self, task, change_dirs=True):
        if self.enabled:
            if not self._filter_task(task):
                return

            path = self.root_path
            node = self.root_node.children["default"]
            for branching_option in self.branch_options:
                node_exists = branching_option.exists_node(node)
                key = branching_option.key_from_task(task)

                if key is None:
                    continue

                if not node_exists:
                    new_node = self._insert_new_node(task, node, branching_option, key, path, change_dirs)
                    if new_node is None:
                        continue
                    else:
                        node = new_node

                if path is not None:
                    path = path / key
                if key not in node.children:
                    node.set_child(key, TasksNode(self.collapse_multiple_tries))

                    if path is not None and change_dirs:
                        path.mkdir()

                node = node.children[key]

            self._insert_task(node, path, task, change_dirs)

    def _add_node_before_node(self, node, new_node, key, path, change_dirs=True):
        node.insert_as_parent(key, new_node)

        if path is not None and change_dirs and key is not None:
            (path / key).mkdir()
            for child_path in path.iterdir():
                if child_path.name != key:
                    child_path.rename(path / key / child_path.name)

        return new_node

    def _comp_tasks(self, first_task, second_task):
        return first_task.creation_time < second_task.creation_time

    def _insert_task(self, node, path, task, change_dirs=True):
        if task in node.children.values():
            task = task
        children = node.children
        self.task_by_uuid[str(task.uuid)] = node

        target_key = len(children.keys())
        for i in range(len(children.keys())):
            if not self._comp_tasks(children[str(i)], task):
                target_key = i
                break

        for i in reversed(range(target_key, len(children.keys()))):
            children[str(i + 1)] = children[str(i)]

            if path is not None and change_dirs:
                if not (path / str(i)).exists():
                    task = task
                (path / str(i)).rename((path / str(i + 1)))

        children[str(target_key)] = task

        if path is not None and change_dirs:
            (path / str(target_key)).symlink_to(task.build_save_dir(), True)

    def _check_filesystem(self, node, path):
        if type(node) == CollapseNode:
            self._check_filesystem(node.primary_child(), path)
        #elif type(node) == TasksNode and len(node.children) == 1:
        #    self._check_filesystem(list(node.children.values())[0], path)
        elif type(node) not in [RootNode, TaskWrapper] or type(node) == TasksNode:
            if path.exists() and (not path.is_dir() or path.is_symlink()):
                self._remove_path(path)

            path.mkdir(exist_ok=True)

            for child in path.iterdir():
                if not child.is_dir() or child.name not in node.children.keys():
                    self._remove_path(child)

            for dir in node.children.keys():
                self._check_filesystem(node.children[dir], path / dir)
        elif type(node) == TaskWrapper:
            if path.exists() and (not path.is_symlink() or path.resolve(True) != node.build_save_dir()):
                self._remove_path(path)

            if not path.is_symlink():
                path.symlink_to(node.build_save_dir(), True)

    def _remove_path(self, path):
        if path.is_symlink() or path.exists():
            if path.is_file() or path.is_symlink():
                path.unlink()
            else:
                shutil.rmtree(str(path))

    def path_of_task(self, task):
        node = self.task_by_uuid[str(task.uuid)]
        path = []

        for i, child in node.children.items():
            if child == task:
                path.append(i)
                break

        while type(node) != RootNode and type(node.parent) != RootNode:
            path.insert(0, node.parent_key)
            node = node.parent
        return path

    def enable(self, tasks):
        self.enabled = True
        self.refresh(tasks)

    def disable(self):
        self.enabled = False
