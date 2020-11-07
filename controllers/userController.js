const passport = require("passport");
const bcrypt = require("bcryptjs");
const db = require("../models");
require("../config/passport")(passport);

// Defining methods for the userController
module.exports = {
  createUser: function (req, res) {
    console.log("reqbody:signup", req.body);
    db.User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) {
        throw err;
      }
      if (doc) {
        res.send("User Already Exists");
      }
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
      }
    });
  },
  login: function (req, res, next) {
    console.log("reqbody:login", req.body);
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("Wrong username or password");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  },
  findUserData: function (req, res) {
    console.log("finding user data");
    passport.authenticate("local", (err, user, info) => {
      console.log("req.user", req.user);
      res.send(req.user);
      // db.User.findOne({ username: req.user.username }, async (err, doc, res) => {
      //   console.log("userRes", res)
      // });
    })(req, res);
  },

  logout: function (req, res) {
    req.logout();
    res.redirect("/login");
  },
};
