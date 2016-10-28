/* eslint
max-len: 'warn',
react/jsx-filename-extension: 'warn' */
/* b03901108 webPro hw5 ver 1.0 */
/* 10/28, 2016, 13:08 */
import React from 'react';
import ReactDOM from 'react-dom';
import CountDisplay from './count-display';
import TodoItem from './todo-item';
import './index.css';

const { Component } = React;

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      todoState: [],
    };
    this.todos = [];
    this.arrTI = [];
    this.updateText = this.updateText.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.updateClass = this.updateClass.bind(this);
  }
  updateText(e) {
    this.setState({ inputText: e.target.value });
  }
  updateTodo(e) {
    if (e.key === 'Enter') {
      const tmpMsg = this.state.inputText.trim();
      if (tmpMsg !== '') {
        this.todos.push(tmpMsg);
        this.state.todoState.push(0);
      }
      e.target.value = '';
      this.updateText(e);
    }
  }
  updateClass(index, nameState) {
    this.state.todoState[index] = nameState;
    this.setState({ todoState: this.state.todoState.slice() });
  }
  render() {
    let j = 0;
    this.arrTI = [];
    const arrS = this.state.todoState;
    const x = arrS.length;
    for (let i = 0; i < x; i += 1) {
      if (arrS[i] === 0) {
        j += 1;
        this.arrTI.push(
          <TodoItem rank={i} classTag="todo" msgIn={this.todos[i]} fdbk={this.updateClass} />
        );
      } else if (arrS[i] === 1) {
        this.arrTI.push(
          <TodoItem rank={i} classTag="done" msgIn={this.todos[i]} fdbk={this.updateClass} />
        );
      }
    }

    return (
      <div>
        <CountDisplay displayNum={j} />
        <input type="text" placeholder="create your own todo list" onChange={this.updateText} onKeyPress={this.updateTodo} />
        {this.arrTI}
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('mainFrame'));
