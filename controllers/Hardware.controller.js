const { HardwareModel } = require("../model/Hardware.model");
const { UserModel } = require("../model/user.model");

const AddHardware = async (req, res) => {
  const {
    title: title,
    user_id,
    status,
    description: description,
    image: image,
   
  } = req.body;
  const addHardware = new HardwareModel({
    title: title,
    description: description,
    status: status,
    image: image,
   
    user_id,
  });
  await addHardware.save();
  res.send({ msg: "Hardware Added Successfully" });
};

const DeleteHardware = async (req, res) => {
  const id = req.params.id;
  const user_id = req.body.user_id;
  await HardwareModel.deleteOne({ user_id: user_id, _id: id });
  res.send({ msg: "Hardware Deleted Successfully" });
};

const GetHardware = async (req, res) => {
  const { title } = req.query;
  const user_id = req.body.user_id;
  console.log(title, user_id);
  if (title) {
    const result = await HardwareModel.find({
      user_id: user_id,
      title: title,
    });
    res.send(result);
  } else {
    const result = await HardwareModel.find({ user_id: user_id });
    res.send(result);
  }
};

const GetHardwarebyid = async (req, res) => {
  const id = req.params.id;
  try {
    const Hardware = await HardwareModel.findById(id);
    res.send(Hardware);
  } catch (error) {
    res.status(404).send({ msg: "something went wrong" });
  }
};

const UpdateHardware = async (req, res) => {
  const id = req.params.id;
  const { title, user_id, status, description, image, price, feature } =
    req.body;

  await HardwareModel.updateOne(
    { user_id: user_id, _id: id },
    {
      $set: {
        title: title,
        status: status,
        description: description,
        image: image,
        price: price,
        feature: feature,
      },
    }
  );
  res.send({ msg: "Hardware updated Successfully" });
};

const HardwareController = {
  AddHardware,
  DeleteHardware,
  UpdateHardware,
  GetHardware,
  GetHardwarebyid
};

module.exports = {
  HardwareController,
};
