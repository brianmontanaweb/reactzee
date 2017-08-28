import React, { Component } from 'react';
import './App.css';
import Scoreboard from './component/scoreboard/Scoreboard';

class App extends Component {

  state = {
    yahtzeeHistory: [],
    ones: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: Number.parseInt(event.target.value, 10)
    });
  };

  render() {
    return (
      <div>
        <h1>Yahtzee!</h1>
        <Scoreboard handleInput={this.handleInput}
                    goalValue={this.state} />
      </div>
    );
  }
}

export default App;
