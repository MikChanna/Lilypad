import React, { Component } from "react";
import ReactDom from "react-dom";
import ReactS3, { uploadFile } from "react-s3";
// import S3FileUpload from "react-s3";
// import { uploadFile } from "react-s3";

const config = {
  bucketName: "lilypad",
  dirName: "photos" /* optional */,
  region: "us-east-1",
  accessKeyId: "AKIARYI6BBD4EFDGC2MT",
  secretAccessKey: "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",
};

class Gallery extends Component {
  constructor() {
    super();
  }

  upload(e) {
    console.log(e.target.files[0]);
    ReactS3.uploadFile(e.target.files[0], config)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div>
        <h3>Upload your photos here</h3>
        <input type="file" onChange={this.upload} />
      </div>
    );
  }
}
export default Gallery;
