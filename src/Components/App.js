import React, {Component} from 'react';
import '../App.css';
import Ranking from "./Players/Ranking";
import Information from "./Information";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "./Authorization/Login";
import Footer from "./Footer";
import Members from "./Players/Members";
import Signup from "./Authorization/Signup";
import TournamentSignup from "./Temporal/TournamentSignup";
import ForgotPass from "./Authorization/ForgotPass";

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            'count': 0,
            'more': 'variable'
        };
        this.newErrorMessage = this.newErrorMessage.bind(this);
        this.addToCount = this.addToCount.bind(this);
        console.log(this.state);
    }

    addToCount() {
        this.setState({'count': this.state.count + 1});
    }

    newErrorMessage(message) {
        console.log(message);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="extendFooter">
                    <Switch>
                        <Route path="/Information" component={Information}/>
                        <Route path="/Ranking" exact component={Ranking}/>
                        <Route path="/login" exact render={<Login newErrorMessage={this.newErrorMessage}/>}/>
                        <Route path="/Members" exact component={Members}/>
                        <Route path="/tournament" exact component={TournamentSignup}/>
                        <Route path="/signup" exact component={Signup}/>
                        <Route path="/forgot" exact component={ForgotPass}/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/Error" component={ErrorPage}/>
                    </Switch>
                </div>
                <Footer classname="page-footer"/>
            </div>
        );
    }
}

export default App;
