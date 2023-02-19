const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  title: { type: String },
  email: { type: String },
  phone:"",
  query: { type: String },
  
  
  
});

const ContactModel = mongoose.model("Contact", ContactSchema);

module.exports = {
  ContactModel,
};
