import React, { Component } from "react";
import ChildData from "../../components/ChildData";
import SeasonalVids from "../../components/SeasonalVids";

class Home extends Component {
  render() {
    return (
      <div>
        <ChildData />
        <SeasonalVids />
      </div>
    );
  }
}

export default Home;
