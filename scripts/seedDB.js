const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lilypad");

const childSeed = [
  {
    firstName: "Sarah",
    family: 1,
    allergies: "nuts",
    bedtime: "9pm",
    favoriteFood: "chocolate",
    favoriteActivity: "hide and seek",
  },
];

const familySeed = [
  {
    lastName: "Kerr",
    motherFirstName: "Debbie",
    fatherFirstName: "John",
    emergencyNumber: 1234567890,
    email: "kerrfamily@gmail.com",
    address: "123 Main St, Richmond VA 23222",
  },
];

db.Child.remove({})
  .then(() => db.Child.collection.insertMany(childSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Family.remove({})
  .then(() => db.Family.collection.insertMany(familySeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
