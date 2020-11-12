import React from "react";

function ImageItem({ data }) {
  const removeFriend = (id) => {
    //add api call to remove the one photo from the mongodb
    console.log(id);
  };

  return (
    <div className="image centered">
      <img src={data.url} alt="avatar" />
      <span onClick={() => removeFriend(data._id)} className="remove">
        Remove
      </span>
    </div>
  );
}

export default ImageItem;
