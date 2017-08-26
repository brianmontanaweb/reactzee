import React from 'react';
import PropTypes from 'prop-types';

export const Dice = (props) => {
  return (
    <div className="dice__container">

      <div className={`dice__component dice-count dice-count--${props.diceValue}`}>
        <span className="srt">{props.diceValue}</span>
      </div>

    </div>
  )
};

Dice.propTypes = {
  diceValue: PropTypes.string.isRequired,
};