const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = Schema({
  url: {
    type: String,
  },
});

const Image = mongoose.model("Image", ImageSchema);
module.exports = Image;
