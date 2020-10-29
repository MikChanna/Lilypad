import React from "react";
import Searchbar from "../Searchbar";
import YoutubeAPI from "../../utils/YoutubeAPI";
import VideoList from "../VideoList";
import VideoDetail from "../VideoDetail";

export default class Search extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSubmit = async (termFromSearchBar) => {
    const response = await YoutubeAPI.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    this.setState({
      videos: response.data.items,
    });
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <Searchbar handleFormSubmit={this.handleSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          handleVideoSelect={this.handleVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
