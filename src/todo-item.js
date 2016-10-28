/* eslint
react/jsx-filename-extension: 'warn',
jsx-a11y/no-static-element-interactions: 'warn' */
/* b03901108 webPro hw5 ver 1.0 */
/* 10/28, 2016, 13:08 */
import React from 'react';
import './todoItem.css';

const { Component, PropTypes } = React;

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.buttonPressed = false;
    this.doneTodo = this.doneTodo.bind(this);
    this.killTodo = this.killTodo.bind(this);
  }
  doneTodo() {
    if (this.buttonPressed) {
      this.buttonPressed = false;
      this.props.fdbk(this.props.rank, 2);
    } else if (this.props.classTag === 'todo') {
      this.props.fdbk(this.props.rank, 1);
    }
  }
  killTodo() {
    this.buttonPressed = true;
  }
  render() {
    return (
      <div onClick={this.doneTodo} className={this.props.classTag} >
        {this.props.msgIn}
        <input type="button" value="X" className="delete" onClick={this.killTodo} />
      </div>
    );
  }
}
TodoItem.propTypes = {
  rank: PropTypes.number,
  classTag: PropTypes.string,
  msgIn: PropTypes.string,
  fdbk: PropTypes.func,
};

export default TodoItem;
