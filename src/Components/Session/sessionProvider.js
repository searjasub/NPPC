import React, {Component} from 'react';
import SessionContext from './context';
import '../../App.css';

const SessionProvider = Component => {
    class WithAuthentication extends React.Component {

        constructor(props, context) {
            super(props, context);
            const name = localStorage.getItem("userId");
            this.state = {
                user: name ? {name} : null
            };
        }

        render() {
            console.log(this);
            return (
                <SessionContext.Provider value={this}>
                    <Component {...this.props} session={this}/>
                </SessionContext.Provider>
            );
        }
    }

    return WithAuthentication;
};

export default SessionProvider;