import React from 'react';
import State from "./Global";
import Prompt from "./Prompt";
import $ from 'jquery';

export class TaskName extends React.Component {

    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }

    componentDidMount() {
        $(this.wrapperRef.current).find('[data-toggle="tooltip"]').tooltip();
    }

    componentDidUpdate() {
        $(this.wrapperRef.current).find('[data-toggle="tooltip"]').tooltip();
    }


    render() {
        if (this.props.is_test) {
            return (
                <span ref={this.wrapperRef}>Test</span>
            );
        } else {
            if (this.props.name !== undefined && this.props.name.length > 0) {
                return (
                    <span ref={this.wrapperRef}>
                {this.props.name.map((name, i) => {

                    return (
                        <span key={i}>
                        {i !== 0 &&
                        <span className="separator">/</span>
                        }
                            <span data-toggle="tooltip" data-placement="bottom" >{name}</span>
                    </span>
                    )
                })}
            </span>
                );
            } else {
                return (
                    <span ref={this.wrapperRef}>Task</span>
                );
            }
        }
    }
}


function TaskStatus(props) {
    if (props.state === State.RUNNING) {
        function pad(n) {
            n = parseInt(n);
            return (n < 10) ? ("0" + n) : n;
        }

        function renderTime(time) {
            if (time !== null) {
                if (time >= 3600)
                    return pad(time / 3600) + ":" + pad((time % 3600) / 60) + ":" + pad(time % 60);
                else
                    return pad(time / 60) + ":" + pad(time % 60);
            } else
                return "--:--";
        }

        return <div className="time">{renderTime(props.run_time)} / {renderTime(props.time_left)}</div>;
    } else {
        return <div className="time">{props.index + 1}</div>
    }
}

function TaskProgress(props) {
    if (props.state === State.RUNNING) {
        var style = {width: Math.min(1, props.finished_iterations / props.total_iterations) * 100 + '%'};
        return <div className="progress" style={style}></div>;
    } else {
        return "";
    }
}

class TaskToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.pause = this.pause.bind(this);
        this.saveNow = this.saveNow.bind(this);
        this.cancel = this.cancel.bind(this);
        this.runNow = this.runNow.bind(this);
        this.openExtraDialog = this.openExtraDialog.bind(this);
        this.promptExtraRefs = React.createRef();
        this.openLog = this.openLog.bind(this);
        this.clone = this.clone.bind(this);
        this.terminate = this.terminate.bind(this);
        this.createCheckpoint = this.createCheckpoint.bind(this);
    }

    pause() {
        fetch("/pause/" + this.props.task.uuid)
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {

                }
            )
    }

    saveNow() {
        fetch("/save_now/" + this.props.task.uuid)
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {

                }
            )
    }

    createCheckpoint() {
        fetch("/create_checkpoint/" + this.props.task.uuid)
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {

                }
            )
    }


    cancel() {
        fetch("/cancel/" + this.props.task.uuid)
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {

                }
            )
    }

    runNow() {
        fetch("/run_now/" + this.props.task.uuid)
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {

                }
            )
    }

    openExtraDialog() {
        this.promptExtraRefs.current.openDialog();
    }

    openLog() {
        window.open("/log/" + this.props.task.uuid, '_blank');
    }

     clone() {
        fetch("/clone_task/" + this.props.task.uuid)
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {

                }
            )
    }

    terminate() {
        fetch("/terminate/" + this.props.task.uuid)
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {

                }
            )
    }

    render() {
        let currentAction = "";
        if (this.props.task.is_pausing) {
            currentAction = "pausing..."
        } else if (this.props.task.is_saving) {
            currentAction = "saving..."
        } else if (this.props.task.creating_checkpoint) {
            currentAction = "checkpoint..."
        }
        return (
            <div className="toolbar">
                {this.props.task.state === State.RUNNING &&
                    <span>
                        <div className="action" onClick={this.pause} title="Pause the task after the current iteration">
                            <i className="fa fa-pause"></i><span>Pause</span>
                        </div>
                        < div className="action" onClick={this.saveNow} title="Force the task to save after the current iteration">
                            <i className="fas fa-save"></i><span>Save now!</span>
                        </div>
                        < div className="action" onClick={() => this.props.editTask(this.props.task)} title="Change the scheduled number of total iterations">
                            <i className="fa fa-edit"></i><span>Edit</span>
                        </div>
                        <div className="dropdown">
                            <div className="action dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                            <div className="dropdown-menu">
                                <div className="action" onClick={this.openLog} title="View the log">
                                    <i className="far fa-file-alt"></i><span>Log</span>
                                </div>
                                <div className="action" onClick={this.terminate} title="Terminate task">
                                   <i className="fas fa-skull-crossbones"></i><span>Terminate</span>
                                </div>
                                <div className="action" onClick={this.createCheckpoint} title="Create checkpoint">
                                   <i className="far fa-flag"></i><span>Checkpoint</span>
                                </div>
                            </div>
                        </div>
                        <div className="current-action">
                            {currentAction}
                        </div>
                    </span>
                }
                {this.props.task.state === State.QUEUED &&
                    <span>
                        <div className="action" onClick={this.runNow} title="Pause one of the running tasks and start this one instead">
                            <i className="fas fa-exclamation-triangle"></i><span>Run now!</span>
                        </div>
                        < div className="action" onClick={this.openExtraDialog} title="Change the scheduled number of total iterations">
                            <i className="fa fa-edit"></i><span>Change</span>
                        </div>
                        <div className="dropdown">
                            <div className="action dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                            <div className="dropdown-menu">
                                <div className="action" onClick={this.cancel} title="Remove this task from the queue">
                                    <i className="fas fa-times"></i><span>Cancel</span>
                                </div>
                            </div>
                        </div>
                    </span>
                }
                <Prompt ref={this.promptExtraRefs} defaultValue={this.props.task.total_iterations} header="Change total iterations?" text="Specify the new number of iterations, you want the task to run:" url={"/change/" + this.props.task.uuid}/>
            </div>
        );
    }
}

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.taskRef = React.createRef();
        this.dragEnterCounter = 0
    }

    onMouseDown(e) {
        this.target = e.target;
    }

    onDragStart(e) {
        e.dataTransfer.setData("text/plain", this.props.task.uuid);
    }

    onDragOver(e) {
        if (this.props.task.state === State.QUEUED && this.props.task.uuid !== e.dataTransfer.getData("text/plain")) {
            e.preventDefault();
        }
    }

    onDrop(e) {
        if (this.props.task.state === State.QUEUED && this.props.task.uuid !== e.dataTransfer.getData("text/plain")) {
            e.preventDefault();
            fetch("/reorder_task/" + e.dataTransfer.getData("text/plain") + "/" + this.props.index)
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {

                }
            );

            this.dragEnterCounter = 0;
            this.taskRef.current.className = "task";
        }
    }

    onDragEnter(e) {
        if (this.props.task.state === State.QUEUED && this.props.task.uuid !== e.dataTransfer.getData("text/plain")) {
            e.preventDefault();
            this.taskRef.current.className = "task on-drag-over";
            this.dragEnterCounter++;
        }
    }

    onDragLeave(e) {
        if (this.props.task.state === State.QUEUED && this.props.task.uuid !== e.dataTransfer.getData("text/plain")) {
            e.preventDefault();
            this.dragEnterCounter--;
            if (this.dragEnterCounter === 0)
                this.taskRef.current.className = "task";
        }
    }

    render() {
        return (
            <li ref={this.taskRef} className="task" onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDragEnter={this.onDragEnter} onDrop={this.onDrop} onDragStart={this.onDragStart} onMouseDown={this.onMouseDown} draggable={this.props.task.state === State.QUEUED ? "true" : "false"} >
                <div className="content">
                    <div className="header">
                        <div className="project-name">Task</div>
                        <div className="status">
                            <TaskStatus index={this.props.index} state={this.props.task.state} time_left={this.props.task.time_left} run_time={this.props.task.run_time}/>
                            <div className="iterations">{this.props.task.finished_iterations} / {this.props.task.total_iterations}</div>
                        </div>
                    </div>
                    <TaskProgress state={this.props.task.state} total_iterations={this.props.task.total_iterations} finished_iterations={this.props.task.finished_iterations} />
                    <div className="param-name" onClick={() => this.props.highlightTask(this.props.task)}><span className="try-number">{this.props.task.try}</span><TaskName task={this.props.task} name={this.props.task.name}/></div>
                </div>
                <TaskToolbar task={this.props.task} editTask={this.props.editTask} />
            </li>
        );
    }
}

export default Task;