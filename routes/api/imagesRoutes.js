const router = require("express").Router();
const imageController = require("../../controllers/imageController");

router
  .route("/")
  .post(imageController.addImage)
  .get(imageController.getAllImages);

router
  .route("/:id")
  .get(imageController.findById)
  .delete(imageController.remove);

module.exports = router;
