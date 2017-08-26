import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dice } from '../dice/Dice';
import { Label } from '../label/Label';
import { Input } from '../input/Input';
import { Hint } from '../hint/Hint';

class Scoreboard extends Component {
  render() {
    return (
      <div>
        {/*Convert to component to handle consistent values across Dice/Label/Input*/}
        <Dice diceValue={1}/>
        <Label labelName="aces"
               labelValue="How many aces?"/>
        <Input inputValue={this.props.scoreValue}
               inputType="number"
               inputName="aces"
               inputStep={1}
               inputMin={0}
               inputMax={6}
               handleInputChange={this.props.handleInput}/>
        <Hint hintContent="Aces are 1, add up all your aces to score this goal"/>
      </div>
    )
  }

  static propTypes = {
    scoreBoardCount: PropTypes.number
  };
}

export default Scoreboard;