import React from "react";
import YoutubeAPI from "../../utils/YoutubeAPI";
import VideoList from "../VideoList";
import { Grid } from "semantic-ui-react";
import moment from "moment";

export default class SeasonalVids extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    month: moment().format("M"),
  };

  componentDidMount() {
    // console.log(this.state.month);
    this.SeasonalSearch(this.state.month);
  }

  SeasonalSearch = async (month) => {
    const searchTerm = this.SeasonalSearchTerm(month);
    const response = await YoutubeAPI.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
    });
  };

  SeasonalSearchTerm = (month) => {
    switch (month) {
      case "1":
        console.log(month);
        return "new years resolution kids activities";
      case "2":
        console.log(month);
        return "valentines crafts";
      case "3":
        console.log(month);
        return "st. patricks day kids activities";
      case "4":
        console.log(month);
        return "outdoor kids games";
      case "5":
        console.log(month);
        return "recipes for kids";
      case "6":
        console.log(month);
        return "fun summer crafts";
      case "7":
        console.log(month);
        return "summer activities for kids";
      case "8":
        console.log(month);
        return "kids pool games";
      case "9":
        console.log(month);
        return "back to school games";
      case "10":
        console.log(month);
        return "halloween crafts";
      case "11":
        console.log(month);
        return "thanksgiving recipes for kids";
      case "12":
        console.log(month);
        return "christmas carols for kids";
      default:
        console.log(month);
        return "kids activities";
    }
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
