import React from 'react';
import PropTypes from 'prop-types';

export const Label = (props) => {
  return (
    <label className={props.labelClass} htmlFor={props.labelName}>{props.labelValue}</label>
  )
};

Label.defaultProps = {
  labelClass: 'label-dice'
};

Label.propTypes = {
  labelName: PropTypes.string.isRequired,
  labelValue: PropTypes.string.isRequired,
  labelClass: PropTypes.string
};