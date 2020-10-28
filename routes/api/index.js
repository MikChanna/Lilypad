const router = require("express").Router();
const userRoutes = require("./userRoutes");
const childRoutes = require("./childRoutes");

// Book routes
router.use("/users", userRoutes);
router.use("/child", childRoutes);

module.exports = router;
