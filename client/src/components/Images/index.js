import React, { useState, useEffect } from "react";
import API from "../../utils/ImagesAPI";
import ImageItem from "../ImageItem";
import DeleteBtn from "../DeleteBtn";

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

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteImage(id) {
    API.deleteImage(id)
      .then((res) => loadImageData())
      .catch((err) => console.log(err));
  }

  return (
    <div className="ui medium images">
      {imageData.map((image) => (
        <div>
          <ImageItem key={image._id} data={image} />
          <DeleteBtn onClick={() => deleteImage(image._id)} />
        </div>
      ))}
    </div>
  );
}

export default Images;
