import React, { useState, useEffect } from "react";
import API from "../../utils/ChildAPI";
import ChildItem from "../ChildItem";
// var avatarDirectory =
//   process.env.PUBLIC_URL + "/assets/images/boy_darkhair.png";

function ChildData() {
  const [childData, setChildData] = useState([]);

  // loads child information and strores them with setChildData
  useEffect(() => {
    loadChildData();
  }, []);

  useEffect(() => {}, [childData]);

  function loadChildData() {
    API.getChildren()

      .then((res) => setChildData(res.data))

      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Welcome to the ____ family! </h1>

      <div className="stackable ui grid container childData">
        {childData.map((child) => (
          <ChildItem key={child.id} data={child} />
        ))}
      </div>
    </div>
  );
}

export default ChildData;
