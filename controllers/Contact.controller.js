const { ContactModel } = require("../model/Contact.model");
const { UserModel } = require("../model/user.model");

const AddContact = async (req, res) => {
  const {
    title: title,
    email: email,
    phone:phone,
    user_id,
    
    query: query,
   
  } = req.body;
  const addContact = new ContactModel({
    title: title,
    email: email,
    phone:phone,
    query: query,
   
   
    user_id,
  });
  await addContact.save();
  res.send({ msg: "Contact Added Successfully" });
};

const DeleteContact = async (req, res) => {
  const id = req.params.id;
  const user_id = req.body.user_id;
  await ContactModel.deleteOne({ user_id: user_id, _id: id });
  res.send({ msg: "Contact Deleted Successfully" });
};

const GetContact = async (req, res) => {
  const { title } = req.query;
  const user_id = req.body.user_id;
  console.log(title, user_id);
  if (title) {
    const result = await ContactModel.find({
      user_id: user_id,
      title: title,
    });
    res.send(result);
  } else {
    const result = await ContactModel.find({ user_id: user_id });
    res.send(result);
  }
};

const GetContactbyid = async (req, res) => {
  const id = req.params.id;
  try {
    const Contact = await ContactModel.findById(id);
    res.send(Contact);
  } catch (error) {
    res.status(404).send({ msg: "something went wrong" });
  }
};


const ContactController = {
  AddContact,
  DeleteContact,
 
  GetContact,
  GetContactbyid
};

module.exports = {
  ContactController,
};
