import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </div>
    );
  }
}
