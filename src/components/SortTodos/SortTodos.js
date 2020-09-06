import React, { Component } from "react";
import "./SortTodos.scss";

export default class SortTodos extends Component {
  render() {
    return (
      <div className="sort-todos">
          <div className="select">
            <select onChange={this.handleSort}>
              <option value="">Sort todos</option>
              <option value="addition">Order by addition</option>
              <option value="additionInverted">
                Order by addition inverted
              </option>
              <option value="alphabetical">Order by name alphabetically</option>
              <option value="unalphabetical">
                Order by name unalphabetically
              </option>
            </select>
          </div>
      </div>
    );
  }

  /*
   * Add a new todo
   * Pass the mainSort and completionSort values to parent (App.js)
   */
  handleSort = (ev) => {
    this.props.sortTodos(ev.target.value);
  };
}
