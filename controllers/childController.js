const db = require("../models");

// defining methods for childController

module.exports = {

// create a child record
createChild: function(req, res){
    console.log("reqbody", req.body)
    db.Child
        .create({
            firstName: req.body.firstName,
            birthDate: req.body.birthDate,
            age: req.body.age,
            allergies: req.body.allergies,
            bedtime: req.body.bedtime,
            favoriteFood: req.body.favoriteFood,
            favoriteActivity: req.body.favoriteActivity
        })
        .then(dbModel=>res.json(dbModel))
        .catch(function(err) {
            console.log("err", err)
            res.status(401).json(err)
        });
},
// finds all the children
findAll: function(req, res) {
    db.Child
    .find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
// finds the child by ID and updates
update: function(req, res) {
    db.Child
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },






}