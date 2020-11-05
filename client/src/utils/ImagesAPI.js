import axios from "axios";

export default {
  // creates a user
  addImage: function (imageData) {
    return axios.post("/api/images/add_image", imageData);
  },
  // gets user data
  getImages: function (imageData) {
    return axios.get("/api/images/images_data", imageData);
  },
};
