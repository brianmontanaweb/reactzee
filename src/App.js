import React, { Component } from 'react';
import './App.css';
import Scoreboard from './component/scoreboard/Scoreboard';

class App extends Component {

  state = {
    yahtzeeHistory: [],
    aces: ''
  };

  handleInput = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Yahtzee!</h1>
        <Scoreboard handleInput={this.handleInput}
                    scoreValue={this.state.aces} />
      </div>
    );
  }
}

export default App;
