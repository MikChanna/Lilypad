const passport = require("../config/passport");
const db = require("../models");

// Defining methods for the userController
module.exports = {
 
  createUser: function(req, res) {
    db.User
      .create({
          email: req.body.email,
          password: req.body.password
      })
      .then(function() {
          res.redirect(307, "/");
      })
      .catch(function(err) {
          res.status(401).json(err)
      });
  },
  login: function(req, res) {
      passport.authenticate("local"), function(req, res) {
          res.json(req.user);
      }
  },
  findUserData: function(req, res) {
      if(!req.user) {
          res.json({})
      } else {
          res.json({
              email: req.user.email,
              id: req.user.ud
          })
        }
  },
  
  logout: function(req, res) {
    req.logout();
    res.redirect("/login")
      
  }
};