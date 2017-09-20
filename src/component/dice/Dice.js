import React from 'react';
import PropTypes from 'prop-types';
import { Hint } from '../hint/Hint';

export const Dice = (props) => {
  return (
    <div className="dice__container">

      <div className={`dice__component dice-count dice-count--${props.diceValue}`}>
        <span className="srt">{props.diceValue}</span>
      </div>

      <Hint hintContent={props.goalHint} />

    </div>
  )
};

Dice.propTypes = {
  diceValue: PropTypes.string.isRequired,
  goalHint: PropTypes.string,
};