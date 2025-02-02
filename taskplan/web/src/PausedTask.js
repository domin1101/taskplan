import React from 'react';
import Prompt from "./Prompt";
import {TaskName} from "./Task";
import State from "./Global";
import ReassuringPrompt from "./ReassuringPrompt";
import GroupedTasks from "./GroupedTasks";

class PausedTask extends React.Component {
    constructor(props) {
        super(props);

        this.reassuringRemovePromptRefs = React.createRef();
        this.itemRef = React.createRef();
        this.promptExtraRefs = React.createRef();
        this.openExtraDialog = this.openExtraDialog.bind(this);
        this.finish = this.finish.bind(this);
        this.openLog = this.openLog.bind(this);
        this.clone = this.clone.bind(this);
        this.pause = this.pause.bind(this);
        this.makeTestPersistent = this.makeTestPersistent.bind(this);
        this.queueCancel = this.queueCancel.bind(this);
    }

    openExtraDialog() {
        this.promptExtraRefs.current.openDialog();
    }


    finish() {
        fetch("/finish/" + this.props.task.uuid)
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {

                }
            )
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        /*if (prevProps.highlight !== this.props.highlight && this.props.highlight) {
            this.itemRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
        }*/
    }

    componentDidMount() {
        /*if (this.props.highlight) {
            this.itemRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
        }*/
        if (this.props.task === null) {
            fetch("/task_details/" + this.props.uuid)
                .then(res => res.json())
                .then(
                    (result) => {
                    }
                )
        }
    }

    itemClass() {
        let classname = "item item-task ";
        if (this.props.highlight)
            classname += "item-highlight ";
        if (this.props.task.state === State.RUNNING)
            classname += "task-running ";
        else if (this.props.task.state === State.QUEUED)
            classname += "task-queued ";
        if (this.props.collapsed)
            classname += "item-task-collapsed ";
        return classname;
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


    queueCancel() {
        fetch("/cancel/" + this.props.task.uuid)
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


    makeTestPersistent() {
        fetch("/make_test_persistent/" + this.props.task.uuid)
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {

                }
            )
    }

    render() {
        if (this.props.task !== null) {
            return (
                <li ref={this.itemRef} className={this.itemClass()}>
                    <div className="content">
                        <div className="title"><span className="try-number">{this.props.name[this.props.name.length - 1]}</span><TaskName name={this.props.name.slice(0, -1)} is_test={this.props.task.is_test}/></div>
                        <div className="footer">
                            <span><span>Iterations:</span> {this.props.task.finished_iterations} / {this.props.task.total_iterations}</span>
                            <span><span>Created:</span> {this.props.task.creation_time.toShortStr()}</span>
                            <span><span>Last saved:</span> {this.props.task.saved_time.toShortStr()} {this.props.task.had_error == true && <span className="task-error">(Error)</span>}</span>
                            {["name", "saved", "created", "iterations", "started"].findIndex(x => x === this.props.detailCol) === -1 &&
                            <span><span>{this.props.detailCol}:</span> {this.props.detailCol in this.props.metrics ? this.props.metrics[this.props.detailCol][2].toFixed(3) : "N/A"}</span>
                            }
                        </div>
                        <div className="tags">
                            {this.props.task.tags.map(tag => (
                                <div>{tag}</div>
                            ))}
                        </div>
                    </div>
                    <div className="toolbar">
                        {
                            this.props.task.state === State.RUNNING ?
                                <div className="action" onClick={this.pause} title="Pause task">
                                    <i className="fa fa-pause"></i>
                                </div>
                                :

                                this.props.task.state === State.QUEUED ?
                                    <div className="action" onClick={this.queueCancel} title="Remove this task from queue">
                                        <i className="fas fa-times"></i>
                                    </div>
                                    :
                                    <div className="action" onClick={this.openExtraDialog} title="Run for more iterations">
                                        <i className="fa fa-play"></i>
                                    </div>

                        }
                        <div className="action" onClick={() => this.props.showTask(this.props.task.uuid)} title="Show detail information">
                            <i className="fa fa-info"></i>
                        </div>
                        <div className="dropdown">
                            <div className="action dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-h"></i>
                            </div>
                            <div className="dropdown-menu">
                                <div className="action" onClick={() => this.props.editTask(this.props.task)} title="Edit the task config">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <div className="action" onClick={() => this.props.rerunTask(this.props.task)} title="Run new task with the exact same config">
                                    <i className="fa fa-redo"></i>
                                </div>
                                {!this.props.task.is_test &&
                                <div className="action" onClick={() => this.props.filterLikeTask(this.props.task)} title="Filter for similar tasks">
                                    <i className="fas fa-sliders-h"></i>
                                </div>
                                }
                                <div className="action" onClick={this.clone} title="Clone task">
                                    <i className="far fa-copy"></i>
                                </div>
                                <div className="action" onClick={this.openLog} title="View log">
                                    <i className="far fa-file-alt"></i>
                                </div>
                                <div className="action" onClick={() => this.createCheckpoint()} title="Create checkpoint">
                                    <i className="far fa-flag"></i>
                                </div>
                                {this.props.task.state !== State.RUNNING && this.props.task.state !== State.QUEUED && this.props.task.is_test &&
                                    <div className="action" onClick={() => this.makeTestPersistent()} title="Make test run persistent">
                                        <i className="fas fa-infinity"></i>
                                    </div>
                                }
                                {this.props.task.state !== State.RUNNING && this.props.task.state !== State.QUEUED &&
                                <div className="action" onClick={() => this.reassuringRemovePromptRefs.current.openDialog()} title="Remove task">
                                    <i className="far fa-trash-alt"></i>
                                </div>
                                }

                            </div>
                        </div>
                    </div>
                    <Prompt ref={this.promptExtraRefs} devices={this.props.devices} defaultValue={this.props.task.total_iterations} header="Change total iterations?" text="Specify the new number of iterations, you want the task to run:" url={"/continue/" + this.props.task.uuid}/>
                    <ReassuringPrompt ref={this.reassuringRemovePromptRefs} header="Really want to delete?" text="Do you really want to remove this task?" url={"/remove_task/" + this.props.task.uuid}/>
                </li>
            );
        } else {
            return (
                <li ref={this.itemRef} className="item item-task item-task-loading">
                    Loading...
                </li>
            )
        }
    }
}

export default PausedTask;