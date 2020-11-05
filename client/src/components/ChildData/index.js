import React, { useState, useEffect } from "react";
import API from "../../utils/ChildAPI";
import ChildItem from "../ChildItem";

function ChildData() {
  const [childData, setChildData] = useState([]);

  // loads child information and stores them with setChildData
  useEffect(() => {
    loadChildData();
  }, []);

  function loadChildData() {
    API.getChildren()

      .then((res) => setChildData(res.data))

      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Welcome to the ___ family! </h1>

      <div className="ui link stackable centered cards">
        {childData.map((child) => (
          <ChildItem key={child._id} data={child} />
        ))}
      </div>
    </div>
  );
}

export default ChildData;
