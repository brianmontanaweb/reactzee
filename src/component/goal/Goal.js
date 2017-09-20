import React from 'react';
import PropTypes from 'prop-types';
import { Dice } from '../dice/Dice';
import { Label } from '../label/Label';
import { Input } from '../input/Input';

class Goal extends React.Component {
  render() {
    return (
      <div className="flex__grid flex__grid--center flex__grid--row goal">
        <Label labelName="aces"
               labelValue={`How many ${this.props.goalName}?`}/>
        <Dice diceValue={this.props.goalDice} goalHint={this.props.goalHint}/>
        <Input inputValue={this.props.goalValue}
               inputType="number"
               inputName={this.props.goalName}
               inputStep={this.props.goalStep}
               inputMax={this.props.goalMax}
               handleInputChange={this.props.handleInput}/>
      </div>
    )
  }

  static defaultProps = {
    goalStep: 1,
  };

  static propTypes = {
    handleInput: PropTypes.func.isRequired,
    goalDice: PropTypes.string.isRequired,
    goalMax: PropTypes.number,
    goalName: PropTypes.string.isRequired,
    goalHint: PropTypes.string,
  };
}

export default Goal;