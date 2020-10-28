import React from "react";
import Searchbar from "../Searchbar";
import YoutubeAPI from "../../utils/YoutubeAPI";
import VideoList from "../VideoList";
import VideoDetail from "../VideoDetail";
import { Grid } from "semantic-ui-react";

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
        <Grid className="searchResults relaxed">
          <Grid.Column columns={3}>
            <VideoList
              handleVideoSelect={this.handleVideoSelect}
              videos={this.state.videos}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
