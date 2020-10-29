import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.description}
            className="videoImage visible content ui image"
          />
        </div>
        <div className="content">
          <div className="description">{video.snippet.title.slice(0, 25)}</div>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
