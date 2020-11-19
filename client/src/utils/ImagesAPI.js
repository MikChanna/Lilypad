import axios from "axios";

export default {
  // creates an image
  addImage: function (imageData) {
    console.log(imageData);
    return axios.post("/api/image", imageData);
  },
  // gets image data
  getImages: function () {
    return axios.get("/api/image");
  },
  // Gets the image with the given id
  getImage: function (id) {
    return axios.get("/api/image/" + id);
  },
  // Deletes the book with the given id
  deleteImage: function (id) {
    return axios.delete("/api/image/" + id);
  },
};
