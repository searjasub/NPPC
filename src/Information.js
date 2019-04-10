import React, {Component} from 'react';
import './App.css';

class Information extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            text: 'Hello'
        };
    }

    render() {
        return (
            <>
                Information
            </>
        );
    }
}

export default Information;
