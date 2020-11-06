const db = require("../models");

// Defining methods for the imageController
module.exports = {
  addImage: function (req, res) {
    console.log("reqbody", req.body);
    console.log(db);
    db.Image.create({
      url: req.body.url,
    }).catch(function (err) {
      console.log("err", err);
      res.status(401).json(err);
    });
  },
  //finds all images
  getAllImages: function (req, res) {
    db.Image.find({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
