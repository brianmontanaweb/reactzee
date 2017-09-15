import React, { Component } from 'react';
import './App.css';
import Scoreboard from './component/scoreboard/Scoreboard';

class App extends Component {

  state = {
    yahtzeeHistory: [],
    currentGoals: {
      ones: 0,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 0,
    },
  };

  handleInput = (event) => {
    const currentGoals = this.state.currentGoals;
    currentGoals[event.target.name] = event.target.value;

    this.setState({
      currentGoals,
    });
  };

  render() {
    return (
      <div>
        <h1 className="headline-primary">Yahtzee!</h1>
        <Scoreboard handleInput={this.handleInput}
                    currentGoals={this.state.currentGoals} />
      </div>
    );
  }
}

export default App;
