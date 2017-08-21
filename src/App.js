import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/index.css';
import {TodoForm, TodoList, Footer} from './components/todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers';
import {pipe, partial} from './lib/utils';
import {loadTodos, createTodo, saveTodo, destroyTodo} from './lib/todoService';

class App extends Component {

  state = {
    todos: [],
    currentTodo: '',
    username: ''
  };

  static contextTypes = {
    route: PropTypes.string
  };

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}));
  };

  handleRemove = (id, event) => {
    event.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({
      todos: updatedTodos
    });
    destroyTodo(id)
      .then(() => this.showTempMessage('Todo Removed'));
  };

  handleToggle = (id) => {
    const getToggleTodo = pipe(findById, toggleTodo);
    const updated = getToggleTodo(id, this.state.todos);
    const getUpdatedTodos = partial(updateTodo, this.state.todos);
    const updatedTodos = getUpdatedTodos(updated);

    this.setState({
      todos: updatedTodos
    });
    saveTodo(updated)
      .then(() => this.showTempMessage('Todo updated'));
  };

  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const newId = generateId();
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false,
      username: this.state.username,
    };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: '',
      username: ''
    });
    createTodo(newTodo)
      .then(() => this.showTempMessage('Todo added'));
  };

  showTempMessage = (msg) => {
    this.setState({message: msg});
    setTimeout(() => this.setState({message: ''}), 2500);
  };

  handleEmptySubmit = (event) => {
    console.log(event);
    event.preventDefault();
    this.setState({
      errorMessage: 'Please enter a name.'
    });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const submitHandler = this.state.currentTodo && this.state.username ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);

    return (
      <div className="App">
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          {this.state.message && <span className='success'>{this.state.message}</span>}
          <TodoForm handleInputChange={this.handleInputChange}
                    currentTodo={this.state.currentTodo}
                    username={this.state.username}
                    handleSubmit={submitHandler}
          />
          <TodoList
            handleToggle={this.handleToggle}
            todos={displayTodos}
            handleRemove={this.handleRemove} />

          <Footer />
        </div>
      </div>
    );
  };
}

export default App;
