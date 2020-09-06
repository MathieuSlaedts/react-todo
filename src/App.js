import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./styles.scss";
import AddTodo from "./components/AddTodo/AddTodo";
import SortTodos from "./components/SortTodos/SortTodos";
import TodoList from "./components/TodoList/TodoList";
import Users from "./components/Users/Users";

export default class App extends Component {
  state = {
    lastPosition: 3,
    users: [
      'Mathieu', 'Benoit', 'Michel', "Jack"
    ],
    todos: [
      {
        id: "zefegtertye(",
        title: "Cette todo a la position 0",
        done: true,
        position: 0,
        isEditing: false,
        user: 'Mathieu'
      },
      {
        id: "sfqfefsfsfaefe",
        title: "Position 3 pour cette todo",
        done: false,
        position: 3,
        isEditing: false,
        user: ''
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
      <Router>
      <nav><ul>
        <li><Link to="/">Todos</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul></nav>
      <div className="App">
        <Switch>
          <Route exact path="/">

        <h1 className="title is-2 has-text-centered">Todos</h1>
            <AddTodo
              newTodo={this.newTodo}
              users={this.state.users}
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
          </Route>
          <Route exact path="/users">

        <h1 className="title is-2 has-text-centered">Users</h1>
            <Users users={this.state.users} />
          </Route>
        </Switch>
      </div>

        </Router>
    );
  }

  /* CUSTOM METHODS */

  /*
   * Add a new todo
   * Push the new todo in the todos array (in the state)
   */
  newTodo = (newTodo, newPosition) => {
    this.setState({
      todos: [newTodo, ...this.state.todos],
      lastPosition: newPosition
    });
  };

  /*
   * Delete a todo
   * Remove the todo from the todos array (in the state)
   */
  deleteTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.filter((el) => el.id !== todoId)
    });
  };

  /*
   * Mark a todo as "completed" or not
   * Update the "done" value of the todo in the todos array (in the state)
   */
  todoDone = (todoId, newDoneState) => {
    let todos = [...this.state.todos].map((el) => {
      if (el.id === todoId) el.done = newDoneState;
      return el;
    });
    this.setState({ todos: [...todos] });
  };

  /*
   * Edit a todo
   * Update the "title" value of the todo in the todos array (in the state)
   */
  editTodo = (todoId, newTodoTitle) => {
    let todos = [...this.state.todos].map((el) => {
      if (el.id === todoId) el.title = newTodoTitle;
      return el;
    });
    this.setState({ todos: [...todos] });
  };

  /*
   * Show / Hide the Edit form of a todo
   * Update the "isEditing" value of the todo in the todos array (in the state)
   */
  isEditing = (todoId) => {
    console.log(todoId);
    let todos = [...this.state.todos].map((el) => {
      if (el.id === todoId) el.isEditing = !el.isEditing;
      if (el.id !== todoId) el.isEditing = false;
      return el;
    });
    this.setState({ todos: [...todos] });
  };

  /*
   * Sort todos
   * Update the todos array (in the state)
   */
  sortTodos = (orderType) => {
    let todos = [...this.state.todos];

    // Sort todos by...
    if (orderType !== "") {
      switch (orderType) {
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

    this.setState({ todos: [...todos] });
  };
}
