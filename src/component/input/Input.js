import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  return (
    <input value={props.inputValue}
           type={props.inputType}
           name={props.inputName}
           onChange={props.handleInputChange}
           required={props.inputRequired}
           className={props.inputClass}
           step={props.inputStep}
           min={props.inputMin}
           max={props.inputMax}
    />
  )
};

Input.defaultProps = {
  inputType: 'text',
  inputRequired: false,
  inputClass: 'form__input'
};

Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  handleInputChange: PropTypes.func,
  inputRequired: PropTypes.bool,
  inputClass: PropTypes.string,
  inputStep: PropTypes.number,
  inputMin: PropTypes.number,
  inputMax: PropTypes.number,
};