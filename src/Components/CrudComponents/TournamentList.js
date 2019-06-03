import React, {Component} from 'react';
import '../../App.css';
import {withFirebase} from "../Firebase";

const PlayerDetails = ({name}) => {
    return (
        <div>
            {name}
        </div>
    )
};

class TournamentList extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            playerList: {}
        };
    }

    componentWillMount() {
        this.props.firebase.db.ref('/players').on(
            'value',
            (playerList) => {
                this.setState({
                    playerList: playerList.val()
                });
            },
            (error)=>{
                console.log(error);
            });
    }


    render() {
        const {playerList} = this.state;
        return (
            <>
                <div>
                    { playerList ?
                        Object.keys(playerList).map(name =>
                            <PlayerDetails name={name} />
                            )
                        :
                        "There are no players added to the tournament yet."
                    }
                </div>
            </>
        );
    }
}

export default withFirebase(TournamentList);