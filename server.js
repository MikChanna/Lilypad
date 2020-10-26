// env PORT
const PORT = process.env.PORT || 3001;

// dependencies
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
var passport = require('passport');
var path = require('path');

const app = express();
const routes = require("./routes");

// mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lilypad", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// static 
app.use(express.static(path.join(__dirname, '/client/public')));

// add routes
app.use(routes);

app.use(passport.initialize());
app.use(passport.session());


// app is listening on PORT
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });