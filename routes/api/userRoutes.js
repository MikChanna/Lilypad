const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/login"
router
  .route("/login")
  .post(userController.login);

// Matches with "/api/users/signup
router
  .route("/signup")
  .post(userController.createUser);

// Matches with "/api/users/logout
router
  .route("/logout")
  .get(userController.logout);

// Matches with "/api/users/user_data
router
  .route("/user_data")
  .get(userController.findUserData);

module.exports = router;