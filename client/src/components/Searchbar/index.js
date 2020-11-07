import React from "react";
import "./style.css";

export default class Searchbar extends React.Component {
  state = {
    term: "",
  };

  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form searchbar">
          <div className="field">
            <label htmlFor="video-search">Search below:</label>
            <input
              onChange={this.handleChange}
              name="video-search"
              type="text"
              value={this.state.term}
              placeholder="math games for third-graders"
            />
          </div>
        </form>
      </div>
    );
  }
}
