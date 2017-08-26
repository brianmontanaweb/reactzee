import React from 'react';
import PropTypes from 'prop-types';

export const Label = (props) => {
  return (
    <label htmlFor={props.labelName}>{props.labelValue}</label>
  )
};

Label.propTypes = {
  labelName: PropTypes.string.isRequired,
  labelValue: PropTypes.string.isRequired,
};