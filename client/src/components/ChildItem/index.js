import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom"
=======
import "./style.css";
>>>>>>> main
var avatarDirectory = process.env.PUBLIC_URL + "/assets/images/";

function ChildItem({ data }) {
  let formattedBirthday = data.birthDate.slice(1, 6);
  console.log(formattedBirthday);

  return (
    <div className="ui card childCard green">
      <div className="image centered">
        <img
          src={avatarDirectory + data.image}
          className="ui circular image child-data-avatar"
          alt="avatar"
        />
      </div>
      <div className="content">
        <span className="header">{data.firstName}</span>
        <div className="description">
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
<<<<<<< HEAD
            <Link to = {"/child/" + data._id}>Edit</Link>
=======
>>>>>>> main
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildItem;
