import React from "react";
var avatarDirectory = process.env.PUBLIC_URL + "/assets/images/";

function ChildItem({ data }) {
  return (
    <div className="five wide column">
      <center>
        <h2 className="ui header">
          <img
            src={avatarDirectory + data.image}
            className="ui circular image"
            alt="avatar"
          />
          {data.firstName}
        </h2>

        <div className="ui list">
          <div className="item">
            <div className="header">Birthday</div>
            {data.birthDate}
          </div>
          <div className="item">
            <div className="header">Age</div>
            {data.age}
          </div>
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
