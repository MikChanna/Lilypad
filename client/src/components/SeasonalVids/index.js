import React from "react";
// import YoutubeAPI from "../../utils/YoutubeAPI";
import VideoList from "../VideoList";
import { Grid } from "semantic-ui-react";
let newDate = new Date();
let currentMonth = newDate.getMonth();

export default class SeasonalVids extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <Grid className="searchResults">
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
