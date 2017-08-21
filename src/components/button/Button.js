import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  return (
    <button disabled={props.buttonDisabled}
            type={props.buttonType}
            className={props.buttonClass}
    >
      {props.buttonContent}
    </button>
  )
};

Button.defaultProps = {
  buttonClass: 'btn',
};

Button.propTypes = {
  buttonDisabled: PropTypes.bool,
  buttonContent: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  buttonClass: PropTypes.string,
};