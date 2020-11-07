// env PORT
const PORT = process.env.PORT || 3001;

// dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const cors = require("cors");
const passport = require("passport");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const routes = require("./routes");
const aws = require("aws-sdk");
aws.config.region = "us-east-1";
const S3_BUCKET = process.env.BUCKET_NAME;
console.log("bucket name", S3_BUCKET);

// mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Lilypad",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to database")
);

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: "http://localhost:3000", // <-- location of the react app were connecting to
//     credentials: true,
//   })
// );
app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// static
app.use(express.static(path.join(__dirname, "/client/public")));

// add routes
app.use(routes);


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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.post("/save-details", (req, res) => {
  // TODO: Read POSTed form data and do something useful
});

// app is listening on PORT
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
