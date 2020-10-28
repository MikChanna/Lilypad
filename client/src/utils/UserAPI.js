import axios from "axios";

export default {
  // creates a user
  createUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  },
  // find user
  loginUser: function() {
    return axios.post("/api/users/login");
  },
  // logout user
  logoutUser: function() {
    return axios.get("/api/users/logout");
  },
  // gets user data
  getUser: function() {
    return axios.get("/api/users/user_data");
  }
};