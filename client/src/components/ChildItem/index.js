import React from "react";
import "./style.css";
var avatarDirectory = process.env.PUBLIC_URL + "/assets/images/";

function ChildItem({ data }) {
  let formattedBirthday = data.birthDate.slice(1, 6);
  console.log(formattedBirthday);

  return (
    <div class="ui card green">
      <div class="image">
        <img
          src={avatarDirectory + data.image}
          className="ui circular image child-data-avatar"
          alt="avatar"
        />
      </div>
      <div class="content">
        <a class="header">{data.firstName}</a>
        <div class="description">
          <div className="ui list">
            <div className="item">
              <div className="header">Birthday</div>
              {formattedBirthday}
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
        </div>
      </div>
    </div>
  );
}

export default ChildItem;
