// env PORT
const PORT = process.env.PORT || 3001;

// dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require("passport");
var path = require("path");
const routes = require("./routes");
const aws = require("aws-sdk");
aws.config.region = "us-east-1";
const S3_BUCKET = process.env.BUCKET_NAME;
const app = express();
console.log("bucket name", S3_BUCKET);

// mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Lilypad", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// static
app.use(express.static(path.join(__dirname, "/client/public")));

// add routes
app.use(routes);

app.use(passport.initialize());
app.use(passport.session());

app.get("/sign-s3", (req, res) => {
  console.log("hit GET route");
  const s3 = new aws.S3();
  const fileName = req.query["file-name"];
  const fileType = req.query["file-type"];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read",
  };

  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

app.post("/save-details", (req, res) => {
  // TODO: Read POSTed form data and do something useful
});

// app is listening on PORT
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
