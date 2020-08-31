import React, { Component } from "react";
import "./styles.scss";
import AddTodo from "./components/AddTodo/AddTodo";
import SortTodos from "./components/SortTodos/SortTodos";
import TodoList from "./components/TodoList/TodoList";

export default class App extends Component {
  state = {
    lastPosition: 3,
    todos: [
      {
        id: "zefegtertye(",
        title: "Cette todo a la position 0",
        done: true,
        position: 0,
        isEditing: true
      },
      {
        id: "sfqfefsfsfaefe",
        title: "Position 3 pour cette todo",
        done: false,
        position: 3,
        isEditing: false
      },
      {
        id: "dqdacsqfrtzge",
        title: "La position de cette todo est 1",
        done: false,
        position: 1,
        isEditing: false
      },
      {
        id: "sfqfefaefe",
        title: "La position de cette todo est 2",
        done: true,
        position: 2,
        isEditing: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1 className="title is-2 has-text-centered">Todo list</h1>
        <AddTodo
          newTodo={this.newTodo}
          lastPosition={this.state.lastPosition}
        />
        <SortTodos sortTodos={this.sortTodos} />
        <TodoList
          todos={this.state.todos}
          todoDone={this.todoDone}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
          isEditing={this.isEditing}
        />
      </div>
    );
  }

  /* CUSTOM METHODS */

  newTodo = (newTodo, newPosition) => {
    this.setState({
      todos: [newTodo, ...this.state.todos],
      lastPosition: newPosition
    });
  };

  deleteTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.filter((el) => el.id !== todoId)
    });
  };

  todoDone = (todoId, newDoneState) => {
    let todos = [...this.state.todos].map((el) => {
      if (el.id === todoId) el.done = newDoneState;
      return el;
    });
    this.setState({ todos: [...todos] });
  };

  editTodo = (todoId, newTodoTitle) => {
    let todos = [...this.state.todos].map((el) => {
      if (el.id === todoId) el.title = newTodoTitle;
      return el;
    });
    this.setState({ todos: [...todos] });
  };

  isEditing = (todoId) => {
    console.log(todoId);
    let todos = [...this.state.todos].map((el) => {
      if (el.id === todoId) el.isEditing = !el.isEditing;
      if (el.id !== todoId) el.isEditing = false;
      return el;
    });
    this.setState({ todos: [...todos] });
  };

  sortTodos = (mainSort, completionSort) => {
    console.log(mainSort, completionSort);
    let todos = [...this.state.todos];

    if (mainSort !== "") {
      switch (mainSort) {
        case "addition":
          todos.sort((a, b) => (a.position > b.position ? 1 : -1));
          break;
        case "additionInverted":
          todos.sort((a, b) => (b.position > a.position ? 1 : -1));
          break;
        case "alphabetical":
          todos.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "unalphabetical":
          todos.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
      }
    }

    if (completionSort !== "") {
      const todosCompleted = todos.filter((el) => el.done === true);
      const todosUncompleted = todos.filter((el) => el.done === false);
      switch (completionSort) {
        case "completed":
          todos = [...todosCompleted, ...todosUncompleted];
          break;
        case "uncompleted":
          todos = [...todosUncompleted, ...todosCompleted];
          break;
        default:
      }
    }

    this.setState({ todos: [...todos] });
  };
}
