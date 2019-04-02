import React, {Component} from 'react';
import './App.css';

class App extends Component {




    render() {
        console.log("render ran");
        return (
            <div className="App">
                <button onClick={
                    () => {

                        this.setState({'count':this.state.count + 1});
                    }
                }>
                    Click Me
                </button>
                <br/>

                Value: {this.props.count}

            </div>
        );
    }
}

export default App;
