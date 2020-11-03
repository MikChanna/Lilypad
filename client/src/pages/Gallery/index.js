import React, { Component } from "react";
import ReactS3 from "react-s3";
// const awsAPIKey = process.env.S3_KEY;
// const awsSecret = process.env.S3_SECRET;
// const bucket = process.env.BUCKET_NAME;
// const awsRegion = process.env.BUCKET_NAME;

const config = {
  bucketName: process.env.BUCKET_NAME,
  region: process.env.BUCKET_NAME,
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
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
