import React, {Component} from 'react';
import '../App.css';
import Ranking from "./Players/Ranking";
import Information from "./Information";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "./Authorization/Login";
import Footer from "./Footer"
import Members from "./Players/Members";
import Signup from "./Temporal/Signup"

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            'count': 0,
            'more': 'variable'
        };

        this.addToCount = this.addToCount.bind(this);
        console.log(this.state);
    }

    addToCount() {
        this.setState({'count': this.state.count + 1});
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="extendFooter">
                    <Switch>
                        <Route path="/Information" component={Information}/>
                        <Route path="/Ranking" exact component={Ranking}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/Members" exact component={Members}/>
                        <Route path="/Signup" exact component={Signup}/>
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