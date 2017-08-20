import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '../input/Input';
import {Button} from '../button/Button';

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Input inputType="text"
           inputName="currentTodo"
           handleInputChange={props.handleInputChange}
           inputValue={props.currentTodo}
           inputRequired={true}
    />
    <Input inputType="text"
           inputName="username"
           handleInputChange={props.handleInputChange}
           inputValue={props.username}
           inputRequired={true}
    />
    <Button buttonContent="Submit info"
            buttonType="submit"
    />
  </form>
);

TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
};