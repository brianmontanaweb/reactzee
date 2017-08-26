import React from 'react';
import PropTypes from 'prop-types';

export const Hint = (props) => {
  return (
    <span>{props.hintContent}</span>
  )
};

Hint.propTypes = {
  hintContent: PropTypes.string.isRequired,
};