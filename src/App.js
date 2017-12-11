import React, { Component } from 'react';
import './App.css';
import Scoreboard from './component/scoreboard/Scoreboard';
import {randomDiceArray} from "./helpers";

class App extends Component {

  state = {
    yahtzeeHistory: [],
    currentGoals: randomDiceArray({amount: 10, max: 6}),
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
        <h1 className="headline-primary ta-center">Yahtzee!</h1>
        <Scoreboard handleInput={this.handleInput}
                    currentGoals={this.state.currentGoals} />
      </div>
    );
  }
}

export default App;
