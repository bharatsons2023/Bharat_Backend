const mongoose = require("mongoose");

const HardwareSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String },
  image: { type: String, required: true },
  
});

const HardwareModel = mongoose.model("Hardware", HardwareSchema);

module.exports = {
  HardwareModel,
};
