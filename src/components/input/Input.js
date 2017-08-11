import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  return (
    <input type={props.inputType}
         name={props.inputName}
         onChange={props.handleInputChange}
         value={props.inputValue}/>
  );
};

Input.propTypes = {
  inputValue: PropTypes.string,
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  handleInputChange: PropTypes.func,
};