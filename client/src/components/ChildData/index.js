import React, { Component } from "react";
import children from "../../data/Child.json";
var avatarDirectory = process.env.PUBLIC_URL + "/assets/images/";

class ChildData extends Component {
  state = {
    children,
  };

  render() {
    return (
      <div className="ui equal width relaxed grid">
        {this.state.children.map((child) => (
          <div key={child.id}>
            <h2 className="ui header">
              <img
                src={avatarDirectory + child.image}
                className="ui circular image"
                alt="avatar"
              />
              {child.firstName}
            </h2>

            <div className="ui list">
              <div className="item">
                <div className="header">Allergies</div>
                {child.allergies}
              </div>
              <div className="item">
                <div className="header">Bedtime</div>
                {child.bedtime}
              </div>
              <div className="item">
                <div className="header">Favorite food</div>
                {child.favoriteFood}
              </div>
              <div className="item">
                <div className="header">Favorite activity</div>
                {child.favoriteActivity}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ChildData;
