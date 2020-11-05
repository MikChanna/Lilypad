import React, { useEffect } from "react";
// import ReactS3 from "react-s3";

function Gallery() {
  useEffect(() => {
    document.getElementById("file-input").onchange = initUpload;
  }, []);

  // upload(e) {
  //   ReactS3.uploadFile(e.target.files[0], config)
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

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

      <h2>Upload your pictures</h2>

      <input type="file" id="file-input" />
      <p id="status">Please select a file</p>
      <img
        // style="border:1px solid gray;width:300px;"
        id="preview"
        src="/images/default.png"
        alt=""
      />

      <h2>Your information</h2>

      <form method="POST" action="/save-details">
        <input type="hidden" id="avatar-url" name="avatar-url" value="" />
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="full-name" placeholder="Full name" />

        <h2>Save changes</h2>

        <input type="submit" value="Update profile" />
      </form>
    </div>
  );
}
export default Gallery;
