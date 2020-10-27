import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="embeddedVideo">
      <div className="six wide column">
        <center>
          <div className="ui embed">
            <iframe src={videoSrc} allowFullScreen title="Video player" />
          </div>
        </center>

        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      <hr />
    </div>
  );
};

export default VideoDetail;
