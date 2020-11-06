import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
var avatarDirectory = process.env.PUBLIC_URL + "/assets/images/";
var imageStyle = {
  padding: "5px",
  width: "50px",
  height: "50px",
};

export default class NavbarNoLinks extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Menu position="left">
            <Menu.Item>
              <img
                src={avatarDirectory + "water-lily.png"}
                className="waterlily"
                alt="waterlily"
                style={imageStyle}
              />
              <div className="middle aligned content">
                <h2>Lilypad</h2>
              </div>
            </Menu.Item>
          </Menu.Menu>
          
        </Menu>
      </div>
    );
  }
}
