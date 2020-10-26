const router = require("express").Router();
const userRoutes = require("./userRoutes");

// Book routes
router.use("/users", userRoutes);

module.exports = router;
