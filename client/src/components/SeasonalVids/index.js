import React from "react";
import YoutubeAPI from "../../utils/YoutubeAPI";
import VideoList from "../VideoList";
import VideoDetail from "../VideoDetail";
import moment from "moment";

export default class SeasonalVids extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    month: moment().format("M"),
    fullMonth: moment().format("MMMM"),
  };

  componentDidMount() {
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
        return "new years resolution kids activities";
      case "2":
        return "valentines crafts";
      case "3":
        return "st. patricks day kids activities";
      case "4":
        return "outdoor kids games";
      case "5":
        return "recipes for kids";
      case "6":
        return "fun summer crafts";
      case "7":
        return "summer activities for kids";
      case "8":
        return "kids pool games";
      case "9":
        return "back to school games";
      case "10":
        return "halloween crafts";
      case "11":
        return "thanksgiving recipes for kids";
      case "12":
        return "christmas carols for kids";
      default:
        return "kids activities";
    }
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <h1>
          Wondering how to keep the kids entertained? Try these ideas, picked
          just for {this.state.fullMonth}.
        </h1>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          handleVideoSelect={this.handleVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
