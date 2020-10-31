import React from "react";
var avatarDirectory =
  process.env.PUBLIC_URL + "/assets/images/boy_darkhair.png";

function ChildItem({ data }) {
  console.log(data);
  return (
    <div className="five wide column">
      <center>
        <h2 className="ui header">
          <img
            src={avatarDirectory}
            className="ui circular image"
            alt="avatar"
          />
          {data.firstName}
        </h2>

        <div className="ui list">
          <div className="item">
            <div className="header">Allergies</div>
            {data.allergies}
          </div>
          <div className="item">
            <div className="header">Bedtime</div>
            {data.bedtime}
          </div>
          <div className="item">
            <div className="header">Favorite food</div>
            {data.favoriteFood}
          </div>
          <div className="item">
            <div className="header">Favorite activity</div>
            {data.favoriteActivity}
          </div>
        </div>
      </center>
    </div>
  );
}

export default ChildItem;
