import React, { useEffect, useState } from "react";
import "./style.css";
import Images from "../../components/Images";
import API from "../../utils/ImagesAPI";
import Navbar from "../../components/Navbar";

var defaultimage =
  process.env.PUBLIC_URL + "/assets/images/default_photoupload.jpg";

function Gallery() {
  const [images, setImages] = useState([
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSmiley&psig=AOvVaw2qCzYfN9unctxOl_gHSbjl&ust=1604707494224000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiwjrPP7OwCFQAAAAAdAAAAABAD",
  ]);

  useEffect(() => {
    document.getElementById("file-input").onchange = initUpload;
    getAllImages();
  }, []);

  function uploadFile(file, signedRequest, url) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          document.getElementById("preview").src = url;
          document.getElementById("avatar-url").value = url;
          addImage(url);
        } else {
          alert("Could not upload file.");
        }
      }
    };
    xhr.send(file);
  }

  function getSignedRequest(file) {
    const xhr = new XMLHttpRequest();
    let response = "";
    xhr.open("GET", `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          response = JSON.parse(xhr.responseText);
          uploadFile(file, response.signedRequest, response.url);
        } else {
          alert("Could not get signed URL.");
        }
      }
    };
    xhr.send();
    // addImage(response.signedRequest);
  }

  function initUpload() {
    const files = document.getElementById("file-input").files;
    const file = files[0];
    if (file == null) {
      return alert("No file selected.");
    } else {
      console.log(file);
      getSignedRequest(file);
    }
  }

  function addImage(imageURL) {
    API.addImage({
      url: imageURL,
    }).catch((err) => console.log(err));
  }

  function getAllImages() {
    API.getImages()
      .then((res) => {
        setImages(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="ui container fluid">
      <Navbar />
      <h1>Share some memories!</h1>
      <Images images={images} />
      <form method="POST" action="/save-details">
        <input type="hidden" id="avatar-url" name="avatar-url" />
      </form>
      <h5 id="status">Add more images:</h5>

      <img id="preview" src={defaultimage} alt="" />

      <form>
        <input type="file" id="file-input" />
        <button className="ui button signup" type="submit">
          Add!
        </button>
      </form>
    </div>
  );
}
export default Gallery;
