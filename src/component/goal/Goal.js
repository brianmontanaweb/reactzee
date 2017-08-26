import React from 'react';
import PropTypes from 'prop-types';
import { Dice } from '../dice/Dice';
import { Label } from '../label/Label';
import { Input } from '../input/Input';
import { Hint } from '../hint/Hint';

class Goal extends React.Component {
  render() {
    return (
      <div>
        <Dice diceValue={this.props.goalDice}/>
        <Label labelName="aces"
               labelValue="How many aces?"/>
        <Input inputValue={this.props.goalValue}
               inputType="number"
               inputName={this.props.goalName}
               inputStep={1}
               inputMax={this.props.goalMax}
               handleInputChange={this.props.handleInput}/>
        <Hint hintContent="Aces are 1, add up all your aces to score this goal"/>
      </div>
    )
  }

  static propTypes = {
    goalValue: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    goalDice: PropTypes.string.isRequired,
    goalMax: PropTypes.number,
    goalName: PropTypes.string.isRequired,
  }
}

export default Goal;