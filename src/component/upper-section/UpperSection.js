import React from 'react';
import Goal from '../goal/Goal';
import Total from '../total/Total';
import PropTypes from 'prop-types';

class UpperSection extends React.Component {
  render() {
    let total = () => {
      return Object.values(this.props.currentGoals).reduce((a,b) => Number.parseInt(a, 10) + (Number.parseInt(b, 10) || 0), 0);
    };
    let bonusTotal = total => {
      total += total > 63 ? 35 : total;
      return total;
    };
    // TODO: setup array to map out the dice components dynamically

    return (
      <div className="flex__grid flex__grid--center flex__grid--row">
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.currentGoals.ones}
              goalDice={1}
              goalHint="Count and add only ones"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.currentGoals.twos}
              goalDice={2}
              goalHint="Count and add only twos"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.currentGoals.threes}
              goalDice={3}
              goalHint="Count and add only threes"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.currentGoals.fours}
              goalDice={4}
              goalHint="Count and add only fours"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.currentGoals.fives}
              goalDice={5}
              goalHint="Count and add only fives"
        />
        <Goal handleInput={this.props.handleInput}
              goalValue={this.props.currentGoals.sixes}
              goalDice={6}
              goalHint="Count and add only sixes"
        />
        {/*Top total + bonus if score > 63*/}
        <Total totalValue={total} />
        <Total totalValue={bonusTotal} />
      </div>
    )
  }

  static propTypes = {
    handleInput: PropTypes.func.isRequired,
    currentGoals: PropTypes.object.isRequired,
  };
}

export default UpperSection;