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
               labelValue={`How many ${this.props.goalName}?`}/>
        <Input inputValue={this.props.goalValue}
               inputType="number"
               inputName={this.props.goalName}
               inputStep={1}
               inputMax={this.props.goalMax}
               handleInputChange={this.props.handleInput}/>
        <Hint hintContent={this.props.goalHint} />
      </div>
    )
  }

  static propTypes = {
    handleInput: PropTypes.func.isRequired,
    goalDice: PropTypes.string.isRequired,
    goalMax: PropTypes.number,
    goalName: PropTypes.string.isRequired,
    goalHint: PropTypes.string,
  }
}

export default Goal;