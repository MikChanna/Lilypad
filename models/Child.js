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
  lastName: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  allergies: {
    type: Array,
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
});

const Child = mongoose.model("Child", ChildSchema);
module.exports = Child;
