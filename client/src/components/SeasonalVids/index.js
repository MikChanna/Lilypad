import React from "react";
import YoutubeAPI from "../../utils/YoutubeAPI";
import VideoList from "../VideoList";
import { Grid } from "semantic-ui-react";


export default class SeasonalVids extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    month = new Date().getMonth(), 
  };

  SeasonalSearchTerm = (month) => { 
    switch(month) {
        case 1: 
            return "new years resolution kids activities"; 
            break; 
        case 2:
            return "valentines crafts"; 
            break; 
          case 3:
            return "st. patricks day kids activities"
            break; 
          case 4:
            return "outdoor kids games"
            break; 
          case 5:
            return "recipes for kids"
            break;
          case 6:
            return "fun summer crafts"
            break;
          case 7:
            return "summer activities for kids" 
            break;
          case 8:
            return "kids pool games"
            break;
          case 9:
            return "back to school games"
            break;
          case 10:
            return "halloween crafts"
            break;
          case 11:
            return "thanksgiving recipes for kids"
            break;
          case 12:
            return "christmas carols for kids"
            break; 
        default:
          return "kids activities"
      }
  }

  SeasonalSearch = () => { 
    const response = await YoutubeAPI.get("/search", { 
        params: { 
            q: this.SeasonalSearchTerm()
        }, 
    }); 
    this.setState({ 
        videos: response.data.items, 
    })
  }

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
