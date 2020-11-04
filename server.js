// env PORT
const PORT = process.env.PORT || 3001;

// dependencies
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
const cors = require("cors");
var passport = require('passport');
var path = require('path');
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const routes = require("./routes");

// mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/copyLilypad',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  ()=> console.log("Connected to database")
);

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: __dirname, // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: 'secretcode',
    resave: false,
    saveUninitialized: false
}));

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// static 
app.use(express.static(path.join(__dirname, '/client/public')));

// add routes
app.use(routes);


// app is listening on PORT
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });