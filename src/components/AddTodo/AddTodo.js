import React, { Component, createRef } from "react";
import { render } from "react-dom";
import uid from "uid";
import "./AddTodo.scss";

export default class Addtodo extends Component {
  titleFld = createRef();
  userFld = createRef();
  render() {
    return (
      <div className={"add-todo"}>
        <form onSubmit={this.handleSumbit}>
          <input className="input" type="text" ref={this.titleFld} name="titleFld" />
          <div className="select">
          <select ref={this.userFld} name="userFld">
            <option value="">Asign to</option>
            {this.props.users.map((el, index) => <option key={el+'_'+index} value={el}>{el}</option>)}
          </select>
          </div>
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
    const newPosition = this.props.lastPosition + 1;
    const newTodo = {
      id: uid(),
      title: this.titleFld.current.value,
      done: false,
      position: newPosition,
      user: this.userFld.current.value,
      isEditing: false
    };
    this.props.newTodo(newTodo, newPosition);
  };
}
