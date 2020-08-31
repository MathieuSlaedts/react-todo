import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.todos.map((el) => (
            <TodoItem
              key={el.id}
              todo={el}
              handleDone={this.handleDone}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleEditBtn={this.handleEditBtn}
            />
          ))}
        </ul>
      </>
    );
  }

  /* CUSTOM METHODS */

  /*
   * Mark a todo as "completed" or not
   * Pass the Id and the todo and the new "done" state to parent (App.js)
   */
  handleDone = (todoId, newDoneState) => {
    this.props.todoDone(todoId, newDoneState);
  };

  /*
   * delete a todo
   * Pass the id of the todo to parent (App.js)
   */
  handleDelete = (todoId) => {
    this.props.deleteTodo(todoId);
  };

  /*
   * Edit the title of a todo
   * Pass the Id  of the todo and the new title to parent (App.js)
   */
  handleEdit = (todoId, newTodoTitle) => {
    this.props.editTodo(todoId, newTodoTitle);
  };

  /*
   * Show / Hide the Edit form of a todo
   * Pass the Id of the todo to parent (App.js)
   */
  handleEditBtn = (todoId) => {
    this.props.isEditing(todoId);
  };
}
