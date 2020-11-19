import React, { Component } from "react";
import ChildData from "../../components/ChildData";
import SeasonalVids from "../../components/SeasonalVids";
import Navbar from "../../components/Navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ChildData />
        <SeasonalVids />
      </div>
    );
  }
}

export default Home;
