import React, { Component } from "react";
import ReactS3 from "react-s3";

const config = {
  bucketName: "lilypad",
  region: "us-east-1",
  accessKeyId: "AKIARYI6BBD4LBDYXLCM",
  secretAccessKey: "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",
};

class Gallery extends Component {
  upload(e) {
    console.log(e.target.files[0]);
    ReactS3.uploadFile(e.target.files[0], config)
      .then((data) => {
        console.log(data);
        console.log(data.location);
      })
      .catch((err) => {
        console.log(err);
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
