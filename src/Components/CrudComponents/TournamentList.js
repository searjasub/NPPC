import React, {Component} from 'react';
import '../../App.css';
import {withFirebase} from "../Firebase";

class TournamentList extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            playerList: []
        };
    }

    componentWillMount() {
        this.props.firebase.db.ref('/players').on(
            'value',
            (playerList) => {
                console.log(playerList);
            },
            (error)=>{
                console.log(error);
            });
    }


    render() {

        return (
            <>
                <div>

                </div>
            </>
        );
    }
}

export default withFirebase(TournamentList);