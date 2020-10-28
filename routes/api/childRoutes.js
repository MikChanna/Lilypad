const router = require("express").Router();
const childController = require("../../controllers/childController");

// Matches with "/api/child/"
router
  .route("/")
  .post(childController.createChild)
  .get(childController.findAll);

// Matches with "/api/child/:id"
router
  .route("/:id")
  .get(childController.findById)
  .put(childController.update);


module.exports = router;