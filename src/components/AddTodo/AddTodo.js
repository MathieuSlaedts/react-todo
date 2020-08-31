import React, { Component } from "react";
import { render } from "react-dom";
import uid from "uid";
import "./AddTodo.scss";

export default class Addtodo extends Component {
  render() {
    return (
      <div className={"add-todo"}>
        <form onSubmit={this.handleSumbit}>
          <input className="input" type="text" name="newTodoTitle" />
          <button className="button is-info">Add todo</button>
        </form>
      </div>
    );
  }

  /* CUSTOM METHODS */

  /*
   * Add a new todo
   * Pass the new todo to parent (App.js)
   */
  handleSumbit = (ev) => {
    ev.preventDefault();
    const newPosition = ++this.props.lastPosition;
    const newTodo = {
      id: uid(),
      title: ev.target.newTodoTitle.value,
      done: false,
      position: newPosition
    };
    this.props.newTodo(newTodo, newPosition);
  };
}
