import React from "react";

function ImageItem({ data }) {
  return (
    <div class="ui small images">
      <img src={data.url} alt="avatar" />
    </div>

    // <div className="ui card childCard green">
    //   <div className="image centered">
    //     <img src={data.url} alt="avatar" />
    //   </div>
    // </div>
  );
}

export default ImageItem;
