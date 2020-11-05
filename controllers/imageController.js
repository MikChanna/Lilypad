const db = require("../models");

// Defining methods for the userController
module.exports = {
  addImage: function (req, res) {
    console.log("reqbody", req.body);
    db.Images.create({
      image: req.body.url,
    }).catch(function (err) {
      console.log("err", err);
      res.status(401).json(err);
    });
  },

  getAllImages: function (req, res) {
    if (!req.image) {
      res.json({});
    } else {
      db.Images.find({}).then(res.json(db.model));
    }
  },
};
