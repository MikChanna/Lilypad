const router = require("express").Router();
const imageController = require("../../controllers/imageController");

// Matches with "/api/users/signup
router.route("/add_images").post(imageController.addImage);

// Matches with "/api/users/user_data
router.route("/images_data").get(imageController.getAllImages);

module.exports = router;
