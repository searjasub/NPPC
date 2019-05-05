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
                <br/>
                <p className="font-weight-bold">
                    Neumont Ping Pong Club
                </p>
                <br/>
                <p className="text-weight-normal  mx-5">
                    This website has been put together so people can see their current ranking on the On-Going Tournament

                </p>
            </>
        );
    }
}

export default Information;
