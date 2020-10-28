import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div
      className="ui card video-item"
      onClick={() => handleVideoSelect(video)}
      className="video-item ui card"
    >
      <div className="ui slide masked reveal image">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
          className="videoImage visible content ui image"
        />
      </div>
      <div className="content">
        <a>{video.snippet.title.slice(0, 25)}</a>
      </div>
    </div>
  );
};
export default VideoItem;
