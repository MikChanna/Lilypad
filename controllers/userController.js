const passport = require("../config/passport");
const db = require("../models");

// Defining methods for the userController
module.exports = {
 
  createUser: function(req, res) {
    console.log("reqbody", req.body)
    db.User
      .create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          password: req.body.password
      })
      .then(function() {
          res.redirect(307, "/login");
      })
      .catch(function(err) {
          console.log("err", err)
          res.status(401).json(err)
      });
  },
  login: function(req, res) {
      passport.authenticate("local"), function(req, res) {
        res.redirect(307, "/");
      }
  },
  findUserData: function(req, res) {
      if(!req.user) {
          res.json({})
      } else {
          res.json({
              email: req.user.email,
              id: req.user.id
          })
        }
  },
  
  logout: function(req, res) {
    req.logout();
    res.redirect("/login")
      
  }
};