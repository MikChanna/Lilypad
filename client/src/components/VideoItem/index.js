import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div
      className="ui card video-item"
      onClick={() => handleVideoSelect(video)}
    >
      <div className="ui slide masked reveal image">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
          className="videoImage visible content ui image"
        />
      </div>
      <div className="content" onClick={() => handleVideoSelect(video)}>
        <h5>{video.snippet.title.slice(0, 25)}</h5>
      </div>
    </div>
  );
};
export default VideoItem;
