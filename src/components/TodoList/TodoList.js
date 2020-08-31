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

  handleDone = (todoId, newDoneState) => {
    this.props.todoDone(todoId, newDoneState);
  };

  handleDelete = (todoId) => {
    this.props.deleteTodo(todoId);
  };

  handleEdit = (todoId, newTodoTitle) => {
    this.props.editTodo(todoId, newTodoTitle);
  };

  handleEditBtn = (todoId) => {
    this.props.isEditing(todoId);
  };
}
