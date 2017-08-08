import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text"
           onChange={props.handleInputChange}
           value={props.currentTodo} />
  </form>
);

TodoForm.propTypes = {
  currentTodo: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};