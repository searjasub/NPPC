import React, {Component} from 'react';
import './App.css';
import Ranking from "./Ranking";
import Information from "./Information";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Login from "./Login";
import Footer from "./Footer"
import Members from "./Members";

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
                <Switch>
                    <Route path="/Information" component={Information}/>
                    <Route path="/Ranking" exact component={Ranking}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/Members" exact component={Members}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Error" component={ErrorPage}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
