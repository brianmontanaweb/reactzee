import React from 'react';
import PropTypes from 'prop-types';

export const Hint = (props) => {
  return (
    <span className={props.hintClass}>{props.hintContent}</span>
  )
};

Hint.defaultProps = {
  hintClass: 'hint'
};

Hint.propTypes = {
  hintContent: PropTypes.string.isRequired,
  hintClass: PropTypes.string,
};