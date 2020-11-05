import React, { useEffect } from "react";
import "./style.css";
var defaultimage =
  process.env.PUBLIC_URL + "/assets/images/default_photoupload.jpg";

function Gallery() {
  useEffect(() => {
    document.getElementById("file-input").onchange = initUpload;
  }, []);

  /* Function to carry out the actual PUT request to S3 
  using the signed request from the app.
  */
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

  /* Function to get the temporary signed request from the app.
  If request successful, continue to upload the file using this signed
  request. */
  function getSignedRequest(file) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
          const response = JSON.parse(xhr.responseText);
          console.log(response);
          uploadFile(file, response.signedRequest, response.url);
        } else {
          alert("Could not get signed URL.");
        }
      }
    };
    xhr.send();
  }

  /* Function called when file input updated. If there is a file selected, then
  start upload procedure by asking for a signed request from the app. */
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

  return (
    <div className="photo form">
      <h1>Share some memories!</h1>
      <form method="POST" action="/save-details">
        <input
          type="hidden"
          id="avatar-url"
          name="avatar-url"
          value="/images/default.png"
        />
      </form>
      <p id="status">Please select a file to add to the family album</p>
      <input type="file" id="file-input" /> <br />
      <img id="preview" src={defaultimage} alt="" />
    </div>
  );
}
export default Gallery;
