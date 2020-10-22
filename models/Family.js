const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FamilySchema = Schema({
  lastName: {
    type: String,
  },
  motherFirstName: {
    type: String,
  },
  fatherFirstName: {
    type: String,
  },
  emergencyNumber: {
    type: Number,
    //add validation for 7 digits
  },
  email: {
    type: String,
    //add email validation
  },
  address: {
    type: String,
  },
});

const Family = mongoose.model("Family", FamilySchema);
module.exports = Family;
