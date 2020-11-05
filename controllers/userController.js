const passport = require("passport");
const bcrypt = require("bcryptjs")
const db = require("../models");

// Defining methods for the userController
module.exports = {
<<<<<<< HEAD
 
  createUser: function(req, res) {
    console.log("reqbody:signup", req.body)
    db.User
      .findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newUser = new db.User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            username: req.body.username,
            password: hashedPassword,

          });
          await newUser.save();
          console.log("User Created");
          res.status(200).end();
          // res.redirect(307, "/api/login");
        }
=======
  createUser: function (req, res) {
    console.log("reqbody", req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function () {
        res.redirect(307, "/");
      })
      .catch(function (err) {
        console.log("err", err);
        res.status(401).json(err);
>>>>>>> main
      });

  },
<<<<<<< HEAD
  login: function(req, res, next) {
    console.log("reqbody:login", req.body)
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);

 
  },
  findUserData: function(req, res) {
      if(!req.user) {
          res.json({})
      } else {
        res.send(req.user); 
          
        }
=======
  login: function (req, res) {
    passport.authenticate("local"),
      function (req, res) {
        res.redirect(307, "/");
      };
  },
  findUserData: function (req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.ud,
      });
    }
>>>>>>> main
  },

  logout: function (req, res) {
    req.logout();
    res.redirect("/login");
  },
};
