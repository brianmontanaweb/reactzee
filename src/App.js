import React, { Component } from 'react';
import './App.css';
import Scoreboard from './component/scoreboard/Scoreboard';

class App extends Component {

  state = {
    yahtzeeHistory: [],
    aces: '',
    twos: '',
    threes: '',
    fours: '',
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
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
