import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div class="ui link cards">
      <div class="card">
        <div class="image">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.description}
            className="videoImage visible content ui image"
          />
        </div>
        <div class="content">
          <div class="description">{video.snippet.title.slice(0, 25)}</div>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
