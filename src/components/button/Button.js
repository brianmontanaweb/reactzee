import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  return (
    <button disabled={props.buttonDisabled}
            type={props.buttonType}
    >
      {props.buttonContent}
    </button>
  )
};

Button.propTypes = {
  buttonDisabled: PropTypes.bool,
  buttonContent: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
};