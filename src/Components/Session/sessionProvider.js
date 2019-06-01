import React, {Component} from 'react';
import SessionContext from './context';
import '../../App.css';
import {withFirebase} from "../Firebase";

const SessionProvider = Component => {
    class WithAuthentication extends React.Component {

        constructor(props, context) {
            super(props, context);
            this.state = {
                user: null
            };
        }

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if(authUser){
                        this.setState({user: authUser});
                        // this.props.firebase.user(authUser.uid).once('value', SNAPSHOT => {
                        //     mergedData = {...authUser, ...SNAPSHOT.val()};
                        //     this.setState(this.state.firstLoad ?
                        //         { user: mergedData || authUser || null, loading: false, firstLoad: false } :
                        //         { user: mergedData || authUser || null });
                        // })
                    } else {
                        // this.setState(this.state.firstLoad ?
                        //     { user: authUser || null, loading: false, firstLoad: false } :
                        //     { user: authUser || null });
                    }
                });
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

    return withFirebase(WithAuthentication);
};

export default SessionProvider;