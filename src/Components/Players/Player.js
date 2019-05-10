import React, {Component} from 'react';
import '../../App.css';

class Player extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {

        const {name, wins} = this.props.player;

        return (
            <>
                <div>
                    {name}
                    <br/>
                    {wins}
                </div>
            </>
        );
    }
}

export default Player;