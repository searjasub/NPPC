import React, {Component} from 'react';
import '../../App.css';
import {withFirebase} from "../Firebase";
import {withSession} from "../Session";

class TournamentRegistration extends Component {

    constructor(props, context) {
        super(props, context);
        this.signUp = this.signUp.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {};
    }


    signUp(name) {
        console.log(name);
        this.props.firebase.db.ref(`players/${name}` ).push(true)
            .then((returnValue) => {
                console.log(returnValue);
            })
            .catch((error)=>{
                console.log(error);
            });

    }

    onChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    };

    render() {
        const {name} = this.state;
        const {session} = this.props;
        if(!session.state.user){
            return (
                <div>
                    "Not logged in"
                </div>
            )
        }
        return (
            <>
                <div>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={event => this.onChange(event)}
                    />
                    <input
                        type="submit"
                        onClick={() => this.signUp(name)}
                    />
                </div>
            </>
        );
    }
}

export default withSession(TournamentRegistration);