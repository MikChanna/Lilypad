import React from "react";
import "./style.css";
// import DeleteBtn from "../DeleteBtn";
// import API from "../../utils/ImagesAPI";

function ImageItem({ data }) {
  return (
    <div className="image centered">
      <img src={data.url} alt="avatar" />
    </div>
  );
}

export default ImageItem;
