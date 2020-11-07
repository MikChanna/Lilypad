import React, { useState, useEffect } from "react";
import API from "../../utils/ImagesAPI";
import ImageItem from "../ImageItem";

function Images({ images }) {
  const [imageData, setImageData] = useState([]);
  console.log(images);
  useEffect(() => {
    loadImageData();
  }, []);

  function loadImageData() {
    API.getImages()

      .then((res) => {
        setImageData(res.data);
      })

      .catch((err) => console.log(err));
  }

  return (
    <div className="ui medium images">
      {imageData.map((image) => (
        <ImageItem key={image._id} data={image} />
      ))}
    </div>
  );
}

export default Images;
