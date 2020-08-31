import React, { Component } from "react";
import "./TodoItem.scss";

export default class TodoItem extends Component {
  state = {
    displayEditTodoFld: false
  };
  render() {
    return (
      <li className={`todo ${this.props.todo.done === true ? "is-done" : ""}`}>
        <input
          className="done-todo-fld"
          type="checkbox"
          name="doneTodoFld"
          onChange={this.handleDone}
          checked={this.props.todo.done}
        />
        <p className={"todo-title"}>
          <span>{this.props.todo.title}</span>
          {this.props.todo.done === true && (
            <span className="todo-completed"> Completed!</span>
          )}
        </p>
        <form
          className={`edit-todo ${
            this.props.todo.isEditing === false ? "is-hidden" : ""
          }`}
          onSubmit={this.handleEdit}
        >
          <input
            className="input"
            type="text"
            name="editTodoFld"
            placeholder={this.props.todo.title}
          />
          <button className="button">Edit</button>
          <button className="button" onClick={this.handleEditBtn}>
            Close
          </button>
        </form>

        <button className="button" onClick={this.handleEditBtn}>
          Edit
        </button>
        <button className="button" onClick={this.handleDelete}>
          Delete
        </button>
      </li>
    );
  }

  /* CUSTOM METHODS */

  handleDone = (ev) => {
    const todoId = this.props.todo.id;
    const newDoneState = !this.props.todo.done;
    this.props.handleDone(todoId, newDoneState);
  };

  handleDelete = (ev) => {
    ev.preventDefault();
    const todoId = this.props.todo.id;
    this.props.handleDelete(todoId);
  };

  handleEdit = (ev) => {
    console.log("test");
    ev.preventDefault();
    const todoId = this.props.todo.id;
    const newTodoTitle = ev.target.editTodoFld.value;
    console.log(newTodoTitle);
    this.props.handleEdit(todoId, newTodoTitle);
    this.handleEditBtn(ev);
  };

  handleEditBtn = (ev) => {
    ev.preventDefault();
    const todoId = this.props.todo.id;
    this.props.handleEditBtn(todoId);
    //this.permuteDisplayEditTodoFld();
  };

  /* noSubmit = (ev) => {
    ev.preventDefault();
  }; */
}
