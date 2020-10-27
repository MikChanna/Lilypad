import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
var avatarDirectory = process.env.PUBLIC_URL + "/assets/images/";
var imageStyle = {
  padding:"5px",
  width:"50px",
  height:"50px"
} 

export default class Navbar extends Component {
  state = { activeItem: "home" };


  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            as={Link}
            name="home"
            to="/"
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
            name="chat"
            to="/chat"
            active={activeItem === "chat"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              Add Child<a href = "../../pages/AddChild"><img src={avatarDirectory + "plus.png"} className="plus" alt="plusSign" style={imageStyle}/></a>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
