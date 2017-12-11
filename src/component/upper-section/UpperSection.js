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
    // TODO: setup array to map out the dice components dynamically, when user starts game

    return (
      <div className="flex__grid flex__grid--center flex__grid--row">
        {this.props.currentGoals.map((element, index) =>
          <Goal key={index}
                handleInput={this.props.handleInput}
                goalHint={`Count and add only ${element}`}
                goalDice={element}
          />
        )}
        {/*Top total + bonus if score > 63*/}
        <Total totalValue={total} />
        <Total totalValue={bonusTotal} />
      </div>
    )
  }

  static propTypes = {
    handleInput: PropTypes.func.isRequired,
    currentGoals: PropTypes.array.isRequired,
  };
}

export default UpperSection;