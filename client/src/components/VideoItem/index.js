import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div className="ui link centered cards">
      <div className="card" onClick={() => handleVideoSelect(video)}>
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
