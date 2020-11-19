const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = Schema({
  firstName: {
    type: String,
  },
  family: {
    type: Schema.Types.ObjectId,
    ref: "Family",
  },
 
  birthDate: {
    type: String,
  },
  age: {
    type:String,
  },
  allergies: {
    type: String,
  },
  bedtime: {
    type: String,
  },
  favoriteFood: {
    type: String,
  },
  favoriteActivity: {
    type: String,
  },
  image:{
    type: String,
  },
 
});

const Child = mongoose.model("Child", ChildSchema);
module.exports = Child;
