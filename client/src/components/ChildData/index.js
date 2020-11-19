import React, { useState, useEffect } from "react";
import API from "../../utils/ChildAPI";
import userAPI from "../../utils/UserAPI"
import ChildItem from "../ChildItem";

function ChildData() {
  const [childData, setChildData] = useState([]);
  const [userData, setUserData] = useState("");

  // loads child information and stores them with setChildData
  useEffect(() => {
    loadChildData();
  }, []);

  useEffect(() => {
    loadUserData();
  }, []);

  function loadChildData() {
    API.getChildren()

      .then((res) => {
        console.log("res.data",res.data);
        setChildData(res.data)})

      .catch((err) => console.log(err));
  }

  function loadUserData(doc) {
    userAPI.getUser()

      .then((res) => console.log("res",res.data))

      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Welcome to the {userData.lastName} family! </h1>

      <div className="ui link stackable centered cards">
        {childData.map((child) => (
          <ChildItem key={child._id} data={child} />
        ))}
      </div>
    </div>
  );
}

export default ChildData;
