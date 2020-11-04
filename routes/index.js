const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var isAuthenticated = require("../config/isAuthenticated");
// API Routes
router.use("/api", apiRoutes);


// // HTML routes

// router.use("/", function(req, res) {
//   // If the user already has an account send them to the members page
//   if (req.user) {
//     res.redirect("/home");
//   }
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// router.use("/login", function(req, res) {
//   // If the user already has an account send them to the members page
//   if (req.user) {
//     res.redirect("/");
//   }
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// // Here we've add our isAuthenticated middleware to this route.
// // If a user who is not logged in tries to access this route they will be redirected to the signup page
// router.use("/", isAuthenticated, function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;