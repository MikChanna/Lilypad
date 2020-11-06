import React from "react";

function ImageItem({ data }) {
  return (
    <div className="ui card green">
      <div className="image centered">
        <img
          src={data.url}
          //   className="ui circular image child-data-avatar"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default ImageItem;
