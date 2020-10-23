import React, { Component } from "react";
import children from "../../data/Child.json";
import families from "../../data/Family.json";
import Table from "../../components/Table";

class Home extends Component {
  state = {
    families,
    children,
  };

  render() {
    return (
      <div>
        <h1>Welcome to the ____ family! </h1>
        <Table children={children} />
      </div>
    );
  }
}

export default Home;
