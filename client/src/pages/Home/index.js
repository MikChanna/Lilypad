import React, { Component } from "react";
import ChildData from "../../components/ChildData";
import SeasonalVids from "../../components/SeasonalVids";

//eventually replace with API call to specific family data of whoever is logged in
import children from "../../data/Child.json";
import families from "../../data/Family.json";

class Home extends Component {
  state = {
    families,
    children,
  };

  render() {
    return (
      <div>
        <ChildData children={children} />
        <SeasonalVids />
      </div>
    );
  }
}

export default Home;
