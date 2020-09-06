import React, { Component } from "react";
import "./TodoItem.scss";

export default class TodoItem extends Component {
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
          {this.props.todo.user !== undefined && this.props.todo.user !== "" && (
          <span className="todo-user"> | Asigned to {this.props.todo.user}</span>
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

  /*
   * Mark a todo as "completed" or not
   * Pass the Id of the todo and new "done" state to parent (todolist.js)
   */
  handleDone = (ev) => {
    const todoId = this.props.todo.id;
    const newDoneState = !this.props.todo.done;
    this.props.handleDone(todoId, newDoneState);
  };

  /*
   * delete a todo
   * Pass the id If the todo to parent (todolist.js)
   */
  handleDelete = (ev) => {
    ev.preventDefault();
    const todoId = this.props.todo.id;
    this.props.handleDelete(todoId);
  };

  /*
   * Edit the title of a todo
   * Pass the Id  of the todo and the new title to parent (todolist.js)
   * Display / Hide the Edit form of a todo
   */
  handleEdit = (ev) => {
    ev.preventDefault();
    const todoId = this.props.todo.id;
    const newTodoTitle = ev.target.editTodoFld.value;
    this.props.handleEdit(todoId, newTodoTitle);
    this.handleEditBtn(ev);
  };

  /*
   * Show / Hide the Edit form of a todo
   * Pass the Id of the todo to parent (todolist.js)
   */
  handleEditBtn = (ev) => {
    ev.preventDefault();
    const todoId = this.props.todo.id;
    this.props.handleEditBtn(todoId);
  };
}
