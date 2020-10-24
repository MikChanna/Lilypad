import React, { Component } from "react";
import children from "../../data/Child.json";

class TableBody extends Component {
  state = {
    children,
  };

  render() {
    return (
      <tbody>
        <tr>
          <td>Allergies</td>
          {this.state.children.map((child) => (
            <td>{child.allergies}</td>
          ))}
        </tr>
        <tr>
          <td>Bedtime</td>
          {this.state.children.map((child) => (
            <td>{child.bedtime}</td>
          ))}
        </tr>
        <tr>
          <td>Favorite Food</td>
          {this.state.children.map((child) => (
            <td>{child.favoriteFood}</td>
          ))}
        </tr>
        <tr>
          <td>Favorite Activities</td>
          {this.state.children.map((child) => (
            <td>{child.favoriteActivity}</td>
          ))}
        </tr>
      </tbody>
    );
  }
}

export default TableBody;
