import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '../input/Input';

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Input inputName="currentTodo"
               inputType="text"
               handleInputChange={props.handleInputChange}
               currentTodo={props.currentTodo}
               username={props.username} />
  </form>
);

TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
};