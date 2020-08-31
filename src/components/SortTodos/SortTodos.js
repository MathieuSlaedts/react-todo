import React, { Component } from "react";
import "./SortTodos.scss";

export default class SortTodos extends Component {
  render() {
    return (
      <div className="sort-todos">
        <form onSubmit={this.handleSort}>
          <div className="select">
            <select name="mainSort">
              <option value="">Sort todos by</option>
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
          <div className="select">
            <select name="completionSort">
              <option value="">Sort by completion</option>
              <option value="completed">Tasks completed first</option>
              <option value="uncompleted">Tasks uncompleted first</option>
            </select>
          </div>
          <button className="button">Sort</button>
        </form>
      </div>
    );
  }

  handleSort = (ev) => {
    ev.preventDefault();
    const mainSort = ev.target.mainSort.value;
    const completionSort = ev.target.completionSort.value;
    this.props.sortTodos(mainSort, completionSort);
  };
}
