import React, {Component} from 'react';
import '../../index.css'
import TournamentRegistration from "../CrudComponents/TournamentRegistration";
import TournamentList from "../CrudComponents/TournamentList";

class TournamentSignup extends Component {

    render() {
        return (
            <>
                <div>
                    {/*<iframe*/}
                    {/*    src="https://docs.google.com/forms/d/e/1FAIpQLScuDmHgJlah50uTFYXwT7otYFRBiZf6E0ujy-FFADrBsPWy2g/viewform?embedded=true"*/}
                    {/*    width="640" height="1448" frameBorder="0" marginHeight="0" marginWidth="0">Loading...*/}
                    {/*</iframe>*/}
                    <TournamentRegistration />
                    <TournamentList />
                    {/*<iframe*/}
                    {/*    src="https://docs.google.com/forms/d/e/1FAIpQLScuDmHgJlah50uTFYXwT7otYFRBiZf6E0ujy-FFADrBsPWy2g/viewform?embedded=true"*/}
                    {/*    width="420" height="1448" frameBorder="0" marginHeight="0" marginWidth="0">Loading...*/}
                    {/*</iframe>*/}
                </div>
            </>
        );
    }
}

export default TournamentSignup;