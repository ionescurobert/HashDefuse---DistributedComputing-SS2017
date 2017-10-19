import React, { Component } from 'react';
import './App.css';
import { subscribeToTimer } from "./Api";


class SubmitHash extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', timestamp: 'undefined'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        subscribeToTimer((err, timestamp) => this.setState({
            timestamp
        }));

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        let hash = this.state.value;

        if (!hash) {
            alert("No hash value entered!");
            this.refs.hashTextField.focus();
        }

        if (hash.length === 3) {
        }

        else {
            alert("Not a MD5 hash value entered!");
            this.refs.hashTextField.focus();
        }

    }

    render() {
        return (
            <div className='submitContainer'>
                    <div className='panel panel-default'>
                        <div align="center" className='panel-heading'>Enter here the hash value you want to defuse</div>
                        <div className='panel-body'>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <label className='control-label'>Hash value</label>
                                    <input type='text' className='form-control' ref='hashTextField'
                                           placeholder="MD5 hash" value={this.state.value} onChange={this.handleChange} autoFocus/>
                                    <span className='help-block'>{}</span>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <button type='submit' className='btn btn-primary'>Submit</button>
                                    </div>
                                    <div className="col-xs-6">
                                        <p>Supported: </p>
                                        <p> [*] MD5</p>
                                    </div>
                                </div>

                            </form>
                            <p>
                                This is the timer value got from a WebSocket: {this.state.timestamp}
                            </p>
                        </div>
                    </div>
            </div>

        );
    }
}

export default SubmitHash;