import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className="video-item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
        className="videoImage"
      />
      <div className="content videoListItem">
        <div className="header">{video.snippet.title.slice(0, 25)}</div>
      </div>
    </div>
  );
};
export default VideoItem;
