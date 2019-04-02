import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App2 from "./App2";

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      'count': 0,
      'more': 'variable'
    };
  }


  render() {
    return (
      <div className="App">
       <App2 count={this.state.count}/>
      </div>
    );
  }
}

export default App;
