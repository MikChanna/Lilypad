import React, { useState, useEffect } from "react";
import API from "../../utils/ImagesAPI";
import ImageItem from "../ImageItem";

function Images({ images }) {
  const [imageData, setImageData] = useState([]);
  console.log(images);

  // loads child information and stores them with setChildData
  useEffect(() => {
    loadImageData();
  }, []);

  function loadImageData() {
    API.getImages()

      .then((res) => {
        console.log(res.data);
        setImageData(res.data);
      })

      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="ui link stackable centered cards">
        {imageData.map((image) => (
          <ImageItem key={image._id} data={image} />
        ))}
        images will go here
      </div>
    </div>
  );
}

export default Images;
