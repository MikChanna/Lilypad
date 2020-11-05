const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = Schema({
  url: {
    type: String,
  },
});

const Image = mongoose.model("Image", ImageSchema);
module.exports = Image;
