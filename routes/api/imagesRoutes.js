const router = require("express").Router();
const imageController = require("../../controllers/imageController");

router
  .route("/")
  .post(imageController.addImage)
  .get(imageController.getAllImages);

module.exports = router;
