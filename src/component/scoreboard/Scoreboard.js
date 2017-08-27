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
              goalHint="Count and add only ones"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.goalValue.twos}
              goalDice="2"
              goalMax={10}
              goalName="twos"
              goalHint="Count and add only twos"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.goalValue.threes}
              goalDice="3"
              goalMax={15}
              goalName="threes"
              goalHint="Count and add only threes"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.goalValue.threes}
              goalDice="4"
              goalMax={20}
              goalName="fours"
              goalHint="Count and add only fours"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.goalValue.threes}
              goalDice="5"
              goalMax={25}
              goalName="fives"
              goalHint="Count and add only fives"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.goalValue.threes}
              goalDice="6"
              goalMax={30}
              goalName="sixes"
              goalHint="Count and add only sixes"
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