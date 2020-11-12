import React from "react";
import "./style.css";

function ImageItem({ data }) {
  const removePhoto = (id) => {
    //add api call to remove the one photo from the mongodb
    console.log(id);
  };

  return (
    <div className="image centered">
      <img src={data.url} alt="avatar" />
      <button
        className="ui button red remove"
        onClick={() => removePhoto(data._id)}
      >
        ✗
      </button>
    </div>
  );
}

export default ImageItem;
