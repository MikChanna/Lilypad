import React, { Component } from "react";
import ChildData from "../../components/ChildData";
import SeasonalVids from "../../components/SeasonalVids";

//eventually replace with API call to specific family data of whoever is logged in
// import children from "../../data/Child.json";
// import families from "../../data/Family.json";

class Home extends Component {
 

  render() {
    return (
      <div>
        <ChildData/>
        <SeasonalVids />
      </div>
    );
  }
}

export default Home;
