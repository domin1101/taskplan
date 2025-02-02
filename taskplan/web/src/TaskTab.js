import React from 'react';
import PausedTask from "./PausedTask";
import TaskEditor from "./TaskEditor";
import CollapsedTasks from "./CollapsedTasks";
import GroupedTasks from "./GroupedTasks";

class TaskTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.newTask = this.newTask.bind(this);
        this.rerunTask = this.rerunTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.closeEditors = this.closeEditors.bind(this);
        this.paramValueToName = this.paramValueToName.bind(this);
        this.taskEditor = React.createRef();
    }

    closeEditors() {
        this.taskEditor.current.close();
    }

    newTask() {
        this.props.closeViewer();
        this.taskEditor.current.new();
    }

    rerunTask(task) {
        this.props.closeViewer();
        this.taskEditor.current.open(task);
    }

    editTask(task) {
        this.props.closeViewer();
        this.taskEditor.current.edit(task);
    }

    paramValueToName(paramValue) {
        let paramValueName = paramValue[1].name;
        for (let i = 2; i < paramValue.length; i++)
            paramValueName = paramValueName.replace("$T" + (i - 2) + "$", paramValue[i]);
        return paramValueName;
    };

    render() {
        return (
            <div className="tab" style={{'display': (this.props.active ? 'flex' : 'none')}}>
                <ul className="tasks-tab">
                    {this.props.initialized &&
                    <GroupedTasks
                        tasks={this.props.tasks}
                        rerunTask={this.rerunTask}
                        editTask={this.editTask}
                        showTask={this.props.showTask}
                        filterLikeTask={this.props.filterLikeTask}
                        devices={this.props.devices}
                        detailCol={this.props.detailCol}
                        highlightedTask={this.props.highlightedTask}
                    />
                    }
                </ul>
                <TaskEditor allTags={this.props.allTags} config_path={this.props.config_path} devices={this.props.devices} ref={this.taskEditor} params={this.props.params} paramsByGroup={this.props.paramsByGroup}/>
                <div className="tab-toolbar">
                    <label>
                    </label>
                    <div className="buttons">
                        <div onClick={this.newTask}>New task</div>
                    </div>
                </div>
            </div>
        );
    }

}


export default TaskTab;
