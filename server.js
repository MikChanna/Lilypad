const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// static directory
app.use(express.static(__dirname + "/client/public"));

// add routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lilypad", {
  useNewUrlParser: true,
  useFindAndModify: false
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });