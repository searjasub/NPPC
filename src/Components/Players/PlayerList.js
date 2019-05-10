import React, {Component} from 'react';
import '../../App.css';

class PlayerList extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            players: [
                {name: "Adam", wins: 100},
                {name: "Sear", wins: -50},
                {name: "Kyle", wins: 2}
            ],
            totalGames: 1
        };
    }

    render() {

        const {players, totalGames} = this.state;

        return (
            <>

            </>
        );
    }
}

export default PlayerList;
