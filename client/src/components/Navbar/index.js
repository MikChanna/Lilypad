import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
var avatarDirectory = process.env.PUBLIC_URL + "/assets/images/";
var imageStyle = {
  padding: "5px",
  width: "50px",
  height: "50px",
};

export default class Navbar extends Component {
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

          <Menu.Item
            as={Link}
            name="home"
            to="/home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            name="browse"
            to="/browse"
            active={activeItem === "browse"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            name="gallery"
            to="/gallery"
            active={activeItem === "gallery"}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              name="addChild"
              to="/addChild"
              active={activeItem === "addChild"}
              onClick={this.handleItemClick}
            >
              Add Child
              <img
                src={avatarDirectory + "plus.png"}
                className="plus"
                alt="plusSign"
                style={imageStyle}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
