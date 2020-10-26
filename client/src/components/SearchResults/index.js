import React, { Component } from 'react'; 
import Searchbar from "../Searchbar"; 
import YoutubeAPI from "../../utils/YoutubeAPI"; 
import VideoList from "../VideoList"; 
import VideoDetail from "../VideoDetail"; 

class SearchResults extends Component { 
    state = { 
        videos: [], 
        selectedVideo = null
    }

    handleSubmit = async (termFromSearchBar) => { 
        const response = await YoutubeAPI.get('/search', { 
            params: { 
                q: termFromSearchBar
            }
        })
        this.setState({ 
            videos: response.data.items
        })
    }; 
    handleVideoSelect = (video) => { 
        this.setState({selectedVideo: video})
    }

    render() { 
        return ( 
            <div className = "ui container">
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className = "ui grid">
                    <div className="ui row">
                        <div className ="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className = "five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
