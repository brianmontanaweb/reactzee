import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo} from './lib/todoHelpers';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        name: 'Learn JSX',
        isComplete: true
      },
      {
        id: 2,
        name: 'Build an App',
        isComplete: false
      },
      {
        id: 3,
        name: 'Ship it!',
        isComplete: false
      }
    ],
    currentTodo: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newId = generateId();
    const newTodo = {
      name: this.state.currentTodo,
      isComplete: false,
      id: newId,
    };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    });
  };

  handleEmptySubmit = (event) => {
    event.preventDefault();
    this.setState({
      errorMessage: 'Please enter a name.'
    });
  };

  handleInputChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    });
  };

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm handleInputChange={this.handleInputChange}
                    currentTodo={this.state.currentTodo}
                    handleSubmit={submitHandler}
          />
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  };
}

export default App;
