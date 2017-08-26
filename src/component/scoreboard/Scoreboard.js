import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Goal from '../goal/Goal';

class Scoreboard extends Component {
  render() {
    return (
      <div>
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.goalValue.aces}
              goalDice="1"
              goalMax={5}
              goalName="aces"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.goalValue.twos}
              goalDice="2"
              goalMax={10}
              goalName="twos"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.goalValue.threes}
              goalDice="3"
              goalMax={15}
              goalName="threes"
        />
      </div>
    )
  }

  static propTypes = {
    handleInput: PropTypes.func.isRequired,
    goalValue: PropTypes.object.isRequired,
  };
}

export default Scoreboard;