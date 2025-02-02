import collections

from taskconf.config.ConfigurationManager import ConfigurationManager
import json

from taskplan.EventManager import EventType
from taskplan.Utility import Utility


class ProjectConfiguration:
    def __init__(self, config_dir, event_manager):
        self.event_manager = event_manager
        self._reset(config_dir)

    def _reset(self, config_dir):
        self.configuration = ConfigurationManager(str(config_dir))
        self.params_conf_path = "taskplan_params.json"
        self.param_values_conf_path = "taskplan_param_values.json"
        self.code_versions_conf_path = "taskplan_codeversions.json"
        self.settings = []

        self.param_groups = {}
        for param in self.get_params():
            self._recalc_param_group(param)
        self._correct_sorting()

        self.number_of_tasks_per_param_value = {}

        self.number_of_tasks_per_param_value_key = {}

    def register_task(self, task):
        if "0" in task.config.base_configs:
            for param_value in task.config.base_configs["0"]:
                self.register_task_for_param_value(task, param_value)

    def register_task_for_param_value(self, task, param_value):
        if str(param_value[0].uuid) not in self.number_of_tasks_per_param_value:
            self.number_of_tasks_per_param_value[str(param_value[0].uuid)] = 0
        self.number_of_tasks_per_param_value[str(param_value[0].uuid)] += 1

        key = task.fill_param_value_template(param_value[0].get_metadata("name"), param_value[1:])
        if str(param_value[0].uuid) not in self.number_of_tasks_per_param_value_key:
            self.number_of_tasks_per_param_value_key[str(param_value[0].uuid)] = {}
        store = self.number_of_tasks_per_param_value_key[str(param_value[0].uuid)]
        if key not in store:
            store[key] = [0, param_value[1:]]
        store[key][0] += 1
        self.event_manager.throw(EventType.PARAM_VALUE_CHANGED, param_value[0], self)

    def deregister_task(self, task):
        if "0" in task.config.base_configs:
            for param_value in task.config.base_configs["0"]:
                if str(param_value[0].uuid) in self.number_of_tasks_per_param_value:
                    self.number_of_tasks_per_param_value[str(param_value[0].uuid)] -= 1
                    self.event_manager.throw(EventType.PARAM_VALUE_CHANGED, param_value[0], self)

                key = task.fill_param_value_template(param_value[0].get_metadata("name"), param_value[1:])
                if str(param_value[0].uuid) in self.number_of_tasks_per_param_value_key:
                    if key in self.number_of_tasks_per_param_value_key[str(param_value[0].uuid)]:
                        self.number_of_tasks_per_param_value_key[str(param_value[0].uuid)][key][0] -= 1
                        self.event_manager.throw(EventType.PARAM_VALUE_CHANGED, param_value[0], self)

    def is_param_value_removable(self, param_value):
        return str(param_value.uuid) not in self.number_of_tasks_per_param_value or self.number_of_tasks_per_param_value[str(param_value.uuid)] == 0

    def _correct_sorting(self):
        save_necessary = False

        for param in self.get_params():
            if not param.has_metadata("sorting"):
                param.set_metadata("sorting", self._max_sorting() + 1)
                save_necessary = True

        for i, param in enumerate(self.default_sorted_params()):
            if param.get_metadata("sorting") != i:
                param.set_metadata("sorting", i)
                save_necessary = True

        if save_necessary:
            self.configuration.save()

    def _max_sorting(self):
        max_sorting = 0
        for param in self.get_params():
            if param.has_metadata("sorting"):
                max_sorting = max(max_sorting, param.get_metadata("sorting"))
        return max_sorting

    def sorted_params(self, sorting):
        params = self.get_params()
        for param in params:
            if param.uuid not in sorting:
                sorting[param.uuid] = len(sorting.keys())
        return sorted(params, key=lambda param: sorting[param.uuid])

    def default_sorted_params(self):
        return sorted(self.get_params(), key=lambda param: param.get_metadata("sorting"))

    def change_sorting(self, param_uuid, new_sorting):
        param = self.get_config(param_uuid)
        changed_params = []

        if not param.has_metadata("sorting"):
            param.set_metadata("sorting", self._max_sorting() + 1)
        else:
            old_sorting = param.get_metadata("sorting")
            dir = -1 if new_sorting > old_sorting else 1
            sorted_params = self.default_sorted_params()
            for i in range(new_sorting, old_sorting, dir):
                self._swap_sorting(sorted_params[i], sorted_params[i + dir])
                changed_params.append(sorted_params[i])

        changed_params.append(param)
        self.configuration.save()

        return changed_params

    def force_param(self, param_uuid, enabled):
        param = self.get_config(param_uuid)
        param.set_metadata("force", enabled)
        self.configuration.save()
        return param

    def _swap_sorting(self, first_param, second_param):
        first_sorting = first_param.get_metadata("sorting")
        first_param.set_metadata("sorting", second_param.get_metadata("sorting"))
        second_param.set_metadata("sorting", first_sorting)


    def _recalc_param_group(self, param):
        merged_config = {}

        for param_value in self.get_param_values():
            if param_value.get_metadata('param') == str(param.uuid):
                self._deep_update(merged_config, param_value.get_merged_config(True))

        merged_timesteps = {}
        for timestep in merged_config.keys():
            self._deep_update(merged_timesteps, merged_config[timestep])

        unique_keys = []
        while len(merged_timesteps.keys()) == 1 and type(list(merged_timesteps.values())[0]) == dict:
            unique_keys.append(list(merged_timesteps.keys())[0])
            merged_timesteps = list(merged_timesteps.values())[0]

        self.param_groups[str(param.uuid)] = unique_keys

    def get_param_group(self, param):
        return self.param_groups[param.uuid]

    def _deep_update(self, d, u):
        for k, v in u.items():
            if isinstance(v, collections.Mapping):
                d[k] = self._deep_update(d.get(k, {}), v)
            else:
                d[k] = v
        return d

    def add_param(self, new_data):
        new_data["sorting"] = self._max_sorting() + 1
        param = self.configuration.add_config(new_data, self.params_conf_path)
        self.param_groups[str(param.uuid)] = []
        return param

    def add_param_batch(self, config):
        added_params = []
        added_param_values = []
        self._add_param_batch(config, added_params, added_param_values)
        return added_params, added_param_values

    def _add_param_batch(self, config, added_params, added_param_values, prefix=[]):
        for key in config.keys():
            if type(config[key]) == dict:
                self._add_param_batch(config[key], added_params, added_param_values, prefix + [key])
            else:
                data = {}
                data["name"] = key
                data["config"] = {}
                data["deprecated_param_value"] = ""
                data["default_param_value"] = ""

                added_params.append(self.add_param(data))

                data = {}
                data["name"] = key + "_$T0$"
                data["isTemplate"] = True
                data["template_defaults"] = [json.dumps(config[key]).strip("\"")]
                data["template_deprecated"] = [json.dumps(config[key]).strip("\"")]
                data["config"] = {}
                sub_config = data["config"]
                for sub_key in prefix:
                    sub_config[sub_key] = {}
                    sub_config = sub_config[sub_key]
                sub_config[key] = "$T0$"
                added_param_values.append(self.add_param_value(added_params[-1].uuid, data)[1])

    def add_param_value(self, param_uuid, new_data):
        if param_uuid not in self.configuration.configs_by_uuid or self.configuration.configs_by_uuid[param_uuid] not in self.get_params():
            raise LookupError("No param with uuid " + param_uuid)

        metadata = {"param": param_uuid}
        if "isTemplate" in metadata:
            metadata["isTemplate"] = new_data["isTemplate"]

        param_value = self.configuration.add_config(new_data, self.param_values_conf_path, metadata)

        param = self.get_config(param_uuid)
        self._recalc_param_group(param)
        if param.get_metadata("deprecated_param_value") == "":
            param.set_metadata("deprecated_param_value", str(param_value.uuid))
            self.configuration.save()
        if param.get_metadata("default_param_value") == "":
            param.set_metadata("default_param_value", str(param_value.uuid))
            self.configuration.save()

        return param, param_value

    def add_code_version(self, data):
        self.configuration.add_config(data, self.code_versions_conf_path)

    def edit_param(self, param_uuid, new_data):
        param = self.get_config(param_uuid)
        new_data['uuid'] = param.uuid
        new_data['creation_time'] = param.data['creation_time']
        new_data["sorting"] = param.get_metadata("sorting")
        param.set_data(new_data)
        param.set_metadata("deprecated_param_value", new_data["deprecated_param_value"])
        param.set_metadata("default_param_value", new_data["default_param_value"])
        param.set_metadata("sorting", new_data["sorting"])

        self.configuration.save()
        return param

    def edit_param_value(self, param_uuid, param_value_uuid, new_data):
        param_value = self.get_config(param_value_uuid)
        new_data['uuid'] = param_value.uuid
        new_data['creation_time'] = param_value.data['creation_time']
        new_data['param'] = param_uuid
        param_value.set_data(new_data)

        param = self.get_config(param_uuid)
        self._recalc_param_group(param)

        self.configuration.save()
        return param, param_value

    def add_task(self, base_uuids, config):
        config_data = {}
        config_data['uuid'] = None
        config_data['config'] = config
        config_data['base'] = base_uuids

        task_config = self.configuration.add_config(config_data, None)
        config_data['config'] = task_config.get_merged_config()
        if task_config.dynamic:
            config_data['dynamic'] = True
        task_config.set_data(config_data)

        return task_config

    def collect_visible_bases(self, base_uuids, param_uuids):
        task_config = self.add_task(base_uuids, {})
        full_config = task_config.get_merged_config()
        flat_config = Utility.flatten(full_config)

        selected_base_uuids = {}
        param_visibility = {}
        prev_selected_base_uuids = {}
        for iteration in sorted(base_uuids, key=lambda x: int(x)):
            selected_base_uuids[iteration] = []
            param_visibility[iteration] = {}
            for param in self.get_params():
                if param.has_metadata("condition"):
                    condition = param.get_metadata("condition")
                    for key, value in flat_config.items():
                        condition = condition.replace(key, str(value))
                    selected = Utility.eval_condition(condition)
                else:
                    selected = True

                base_uuid = base_uuids[iteration][param_uuids[iteration].index(str(param.uuid))]
                if selected and (str(param.uuid) not in prev_selected_base_uuids or base_uuid != prev_selected_base_uuids[str(param.uuid)]):
                    selected_base_uuids[iteration].append(base_uuid)
                param_visibility[iteration][str(param.uuid)] = selected
                prev_selected_base_uuids[str(param.uuid)] = base_uuid

        return selected_base_uuids, param_visibility

    def renew_task_config(self, task):
        config = task.config
        left_params = self.get_params()[:]

        param_uuids = []
        if "0" in config.base_configs:
            for param_value in config.base_configs["0"]:
                param_uuids.append(param_value[0].get_metadata('param'))
                for left_param in left_params:
                    if param_value[0].get_metadata('param') == str(left_param.uuid):
                        left_params.remove(left_param)
                        break

        if len(left_params) > 0:
            new_param_values = []
            for left_param in left_params:
                if left_param.has_metadata("deprecated_param_value") and left_param.get_metadata("deprecated_param_value") != "":
                    param_value_config = self.get_config(left_param.get_metadata("deprecated_param_value"))
                    new_param_value = [param_value_config]

                    if param_value_config.has_metadata("isTemplate") and param_value_config.get_metadata("isTemplate"):
                        new_param_value.extend(param_value_config.get_metadata("template_deprecated"))

                    new_param_values.append(new_param_value)
                    param_uuids.append(str(left_param.uuid))
            """param_values = config.base_configs[:] + new_param_values

            param_values = [([str(p[0].uuid)] + p[1:]) for p in param_values]
            _, param_visibility = self.collect_visible_bases(param_values, param_uuids)

            selected_new_param_value = []
            for new_param_value in new_param_values:
                if param_visibility[str(new_param_value[0].get_metadata("param"))]:
                    selected_new_param_value.append(new_param_value)

                    self.register_task_for_param_value(task, new_param_value)

            new_param_values = config.base_configs[:] + selected_new_param_value"""

            new_bases = config.base_configs.copy()
            new_bases["0"] = new_bases["0"][:] + new_param_values
            config.set_base_configs(new_bases)
            data = config.data
            data['config'] = config.get_merged_config()
            data['base'] = {}
            for iteration in new_bases:
                data['base'][iteration] = []
                for param_value in new_bases[iteration]:
                    data['base'][iteration].append([param_value[0].uuid] + param_value[1:])
            config.set_data(data)
            return True
        else:
            return False

    def load_task(self, config):
        return self.configuration.add_config(config, None)

    def get_params(self):
        return self.configuration.configs_by_file[self.params_conf_path] if self.params_conf_path in self.configuration.configs_by_file else []

    def get_param_values(self):
        return self.configuration.configs_by_file[self.param_values_conf_path] if self.param_values_conf_path in self.configuration.configs_by_file else []

    def get_code_versions(self):
        return self.configuration.configs_by_file[self.code_versions_conf_path] if self.code_versions_conf_path in self.configuration.configs_by_file else []

    def get_config(self, config_uuid):
        if config_uuid not in self.configuration.configs_by_uuid:
            raise LookupError("No config with uuid " + config_uuid)
        return self.configuration.configs_by_uuid[config_uuid]

    def remove_param_value(self, param_value_uuid):
        if param_value_uuid in self.configuration.configs_by_uuid:
            param_value = self.configuration.configs_by_uuid[param_value_uuid]
            if self.is_param_value_removable(param_value):
                self.configuration.remove_config(param_value)

                param = self.configuration.configs_by_uuid[param_value.get_metadata('param')]

                one_other_param_value = ""
                for other_param_value in self.get_param_values():
                    if other_param_value.get_metadata('param') == str(param.uuid):
                        one_other_param_value = str(other_param_value.uuid)

                if param.get_metadata("deprecated_param_value") == str(param_value.uuid):
                    param.set_metadata("deprecated_param_value", one_other_param_value)
                    self.configuration.save()
                if param.get_metadata("default_param_value") == str(param_value.uuid):
                    param.set_metadata("default_param_value", one_other_param_value)
                    self.configuration.save()

                return param_value, param

        return None, None

    def has_param_values(self, param_uuid):
        has_param_values = False
        for param_value in self.get_param_values():
            if param_value.get_metadata('param') == param_uuid:
                has_param_values = True
                break
        return has_param_values

    def remove_param(self, param_uuid):
        if param_uuid in self.configuration.configs_by_uuid:
            param = self.configuration.configs_by_uuid[param_uuid]

            if not self.has_param_values(param_uuid):
                self.configuration.remove_config(param)
                return param
        return None

    def reload(self):
        self._reset(self.configuration.config_path)

