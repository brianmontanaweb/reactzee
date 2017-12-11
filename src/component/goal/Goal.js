import React from 'react';
import PropTypes from 'prop-types';
import Dice from '../dice/Dice';
import { Label } from '../label/Label';
import { Input } from '../input/Input';
// TODO: setup has ID for input/label relation
class Goal extends React.Component {
  render() {
    const diceCount = 6;
    let upperMax = value => {
      return value * diceCount;
    };
    return (
      <div className="flex__grid flex__grid--center flex__grid--row goal">
        <Label labelName={`dice-value-${this.props.goalDice}`}
               labelValue={`How many ${this.props.goalDice}s?`}/>
        <Dice diceValue={this.props.goalDice} goalHint={this.props.goalHint}/>
        <Input inputValue={this.props.goalValue}
               inputType="number"
               inputName={`dice-value-${this.props.goalDice}`}
               inputStep={this.props.goalDice}
               inputMax={upperMax(this.props.goalDice)}
               handleInputChange={this.props.handleInput}/>
      </div>
    )
  }

  static propTypes = {
    handleInput: PropTypes.func.isRequired,
    goalDice: PropTypes.number.isRequired,
    goalHint: PropTypes.string,
  };
}

export default Goal;