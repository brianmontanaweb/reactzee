import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Goal from '../goal/Goal';
import Total from '../total/Total';

class Scoreboard extends Component {
  render() {
    let total = this.props.goalValue.ones + this.props.goalValue.twos + this.props.goalValue.threes + this.props.goalValue.fours + this.props.goalValue.fives + this.props.goalValue.sixes;

    return (
      <div>
        {/*Convert this section into top section for passing state from here to children */}
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.goalValue.ones}
              goalDice="1"
              goalMax={5}
              goalName="ones"
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
              goalValue={this.props.goalValue.fours}
              goalDice="4"
              goalMax={20}
              goalName="fours"
              goalHint="Count and add only fours"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.goalValue.fives}
              goalDice="5"
              goalMax={25}
              goalName="fives"
              goalHint="Count and add only fives"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.goalValue.sixes}
              goalDice="6"
              goalMax={30}
              goalName="sixes"
              goalHint="Count and add only sixes"
        />
        {/*Top total + bonus if score > 63*/}
        <Total totalValue={total} />
      </div>
    )
  }

  static propTypes = {
    handleInput: PropTypes.func.isRequired,
    goalValue: PropTypes.object.isRequired,
  };
}

export default Scoreboard;