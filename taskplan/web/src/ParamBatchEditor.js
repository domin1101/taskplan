import React from 'react';
import ConfigEditor from "./ConfigEditor";

class ParamBatchEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.configEditor = React.createRef();
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.save = this.save.bind(this);
    }

    open() {
        this.props.closeEditors();
        this.setState({
            open: true
        });
    }

    close() {
        this.setState({
            open: false
        });
    }

    save() {
        var data = new FormData();

        var dataJson = {};
        dataJson['config'] = this.configEditor.current.state.config;

        data.append("data", JSON.stringify(dataJson));

        var url = "/add_param_batch";

        fetch(url,
            {
                method: "POST",
                body: data
            })
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {

                }
            );

        this.close();
    }


    render() {
        if (this.state.open) {
            return (
                <div className="param-batch-editor editor" >
                    <div className="header">Add multiple parameters</div>
                    <ConfigEditor ref={this.configEditor} url=""/>
                    <div className="buttons">
                        <div onClick={this.save}>Save</div>
                        <div onClick={this.close}>Cancel</div>
                    </div>
                </div>
            );
        } else {
            return "";
        }
    }
}

export default ParamBatchEditor;