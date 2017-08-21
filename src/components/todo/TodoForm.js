import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '../input/Input';
import {Button} from '../button/Button';

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Input inputName="currentTodo"
           handleInputChange={props.handleInputChange}
           inputValue={props.currentTodo}
           inputRequired={true}
    />
    <br />
    <br />
    <Input inputName="username"
           handleInputChange={props.handleInputChange}
           inputValue={props.username}
           inputRequired={true}
    />
    <br />
    <br />
    <Button buttonContent="Submit info"
            buttonType="submit"
            buttonClass="btn-secondary btn-secondary--default"
    />
  </form>
);

TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
};