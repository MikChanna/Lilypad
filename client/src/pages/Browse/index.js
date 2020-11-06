import React from "react";
import Search from "../../components/Search";
import Navbar from "../../components/Navbar"

function Browse() {
  return (
    <div className = "ui container fluid">
      <Navbar/>
    <div>
      <h1>Looking for activity ideas?</h1>
      <Search />
    </div>
    </div>
  );
}

export default Browse;
