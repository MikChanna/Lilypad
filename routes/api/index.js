const router = require("express").Router();
const userRoutes = require("./userRoutes");
const childRoutes = require("./childRoutes");
const imageRoutes = require("./imagesRoutes");

router.use("/users", userRoutes);
router.use("/child", childRoutes);
router.use("/images", imageRoutes);

module.exports = router;
