import React from "react";
import "./style.css";

function ImageItem(props) {
  console.log(props);
  return (
    <div className="image">
      <img src={props.data.url} alt="avatar" />
    </div>
  );
}

export default ImageItem;
