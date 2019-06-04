import React, {Component} from 'react';
import '../../App.css';
import {withFirebase} from "../Firebase";

const PlayerDetails = ({user}) => {
    if(user){
        return (
            <div>
                {user.username}
                <div>

                </div>
                {user.stats.points}
            </div>
        )
    } else {
        return (
            <div>
            Invalid user details
        </div>
        )
    }

};

class TournamentList extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            playerList: {}
        };
    }

    componentWillMount() {
        this.props.firebase.users().on(
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
                        Object.keys(playerList).map((uid) =>
                            <PlayerDetails user={playerList[uid]}  />
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