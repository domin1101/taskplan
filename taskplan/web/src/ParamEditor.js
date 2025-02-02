import React from 'react';

class ParamEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            param: null,
            name: '',
            deprecatedParamValue: '',
            defaultParamValue: '',
            condition: ''
        };

        this.configEditor = React.createRef();
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.save = this.save.bind(this);
        this.new = this.new.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onConditionChange = this.onConditionChange.bind(this);
        this.onDeprecatedParamValueChange = this.onDeprecatedParamValueChange.bind(this);
        this.onDefaultParamValueChange = this.onDefaultParamValueChange.bind(this);
    }

    open(param) {
        this.props.closeEditors();
        this.setState({
            param: param,
            name: param.name,
            condition: param.condition,
            deprecatedParamValue: param.deprecated_param_value.uuid === undefined ? param.values[0].uuid : param.deprecated_param_value.uuid,
            defaultParamValue: param.default_param_value.uuid === undefined ? param.values[0].uuid : param.default_param_value.uuid
        });
    }

    new() {
        this.props.closeEditors();
        this.setState({
            param: {name: 'New parameter', values: []},
            name: '',
            condition: '',
            deprecatedParamValue: '',
            defaultParamValue: ''
        });
    }

    close() {
        this.setState({
            param: null
        });
    }

    save() {
        var data = new FormData();

        var dataJson = {};
        dataJson['name'] = this.state.name;
        dataJson['condition'] = this.state.condition;
        dataJson['deprecated_param_value'] = this.state.deprecatedParamValue;
        dataJson['default_param_value'] = this.state.defaultParamValue;
        dataJson['config'] = {};

        data.append("data", JSON.stringify(dataJson));

        var url = "";
        if (this.state.param.uuid)
            url = "/edit_param/" + this.state.param.uuid;
        else
            url = "/add_param";

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

    onNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    onConditionChange(event) {
        this.setState({
            condition: event.target.value
        });
    }

    onDeprecatedParamValueChange(event) {
        this.setState({
            deprecatedParamValue: event.target.value
        });
    }

    onDefaultParamValueChange(event) {
        this.setState({
            defaultParamValue: event.target.value
        });
    }

    render() {
        if (this.state.param !== null) {
            return (
                <div className="param-editor editor" >
                    <div className="header">{this.state.param.name}</div>
                    <div className="field">
                        <label>Name:</label>
                        <input value={this.state.name} onChange={this.onNameChange} required="required" />
                    </div>
                    {this.state.param.values.length > 0 &&
                    <div className="field">
                        <label>Parameter value for deprecated tasks:</label>
                        <select value={this.state.deprecatedParamValue} onChange={this.onDeprecatedParamValueChange}>
                            {this.state.param.values.map(value => (
                                <option value={value.uuid}>{value.name}</option>
                            ))}
                        </select>
                    </div>
                    }
                    {this.state.param.values.length > 0 &&
                    <div className="field">
                        <label>Default parameter value for new tasks:</label>
                        <select value={this.state.defaultParamValue} onChange={this.onDefaultParamValueChange}>
                            {this.state.param.values.map(value => (
                                <option value={value.uuid}>{value.name}</option>
                            ))}
                        </select>
                    </div>
                    }
                     <div className="field">
                        <label>Condition:</label>
                        <input value={this.state.condition} onChange={this.onConditionChange} required="required" />
                    </div>
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

export default ParamEditor;