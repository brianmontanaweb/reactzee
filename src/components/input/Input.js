import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  return (
    <input type={props.inputType}
           name={props.inputName}
           onChange={props.handleInputChange}
           value={props.inputValue}
           required={props.inputRequired}
           className={props.inputClass}
    />
  );
};

Input.defaultProps = {
  inputType: 'text',
  inputRequired: false,
  inputClass: 'form__input'
};

Input.propTypes = {
  inputValue: PropTypes.string,
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  inputRequired: PropTypes.bool,
  handleInputChange: PropTypes.func,
};