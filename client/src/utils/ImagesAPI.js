import axios from "axios";

export default {
  // creates a user
  addImage: function (imageData) {
    console.log(imageData);
    return axios.post("/api/image", imageData);
  },
  // gets user data
  getImages: function () {
    return axios.get("/api/image");
  },
};
