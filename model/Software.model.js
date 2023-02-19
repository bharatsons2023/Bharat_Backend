const mongoose = require("mongoose");

const SoftwareSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String },
  image: { type: String, required: true },
  price: { type: Number },
  feature: { type: String, required: true },
});

const SoftwareModel = mongoose.model("Software", SoftwareSchema);

module.exports = {
  SoftwareModel,
};
