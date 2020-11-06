import React from "react";

function ImageItem({ data }) {
  return (
    // <div className="ui card green">
    <div className="image centered">
      <img src={data.url} alt="avatar" />
    </div>
    // </div>
  );
}

export default ImageItem;
