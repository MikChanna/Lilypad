import React, { useEffect } from "react";
import "./style.css";
import "../../components/Images";
import Images from "../../components/Images";
import API from "../../utils/ImagesAPI";
// import imageLinks from "./images.json";

var defaultimage =
  process.env.PUBLIC_URL + "/assets/images/default_photoupload.jpg";

function Gallery() {
  useEffect(() => {
    document.getElementById("file-input").onchange = initUpload;
  }, []);

  function uploadFile(file, signedRequest, url) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          document.getElementById("preview").src = url;
          document.getElementById("avatar-url").value = url;
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
          console.log(xhr.responseText);
          response = JSON.parse(xhr.responseText);
          console.log(response.signedRequest);
          uploadFile(file, response.signedRequest, response.url);
        } else {
          alert("Could not get signed URL.");
        }
      }
    };
    xhr.send();
    addImage(response.signedRequest);
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

  function addImage(data) {
    console.log("adding image to mongodb");
    API.addImage({
      url: data,
    }).catch((err) => console.log(err));
  }

  return (
    <div className="photo form">
      <h1>Share some memories!</h1>
      <Images />
      <form method="POST" action="/save-details">
        <input type="hidden" id="avatar-url" name="avatar-url" />
      </form>
      <p id="status">Please select a file to add to the family album</p>
      <form>
        <input type="file" id="file-input" />
        <button className="ui button signup" type="submit">
          Add!
        </button>
      </form>
      <img id="preview" src={defaultimage} alt="" />
    </div>
  );
}
export default Gallery;
