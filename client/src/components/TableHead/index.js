import React, { Component } from "react";
import children from "../../data/Child.json";

class TableHead extends Component {
  state = {
    children,
  };

  render() {
    return (
      <thead>
        <tr>
          <th></th>
          {this.state.children.map((child) => (
            <th>{child.firstName}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
