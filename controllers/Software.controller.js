const { SoftwareModel } = require("../model/Software.model");
const { UserModel } = require("../model/user.model");

const AddSoftware = async (req, res) => {
  const {
    title: title,
    user_id,
    status,
    description: description,
    image: image,
    price: price,
    feature: feature,
  } = req.body;
  const addSoftware = new SoftwareModel({
    title: title,
    description: description,
    status: status,
    image: image,
    price: price,
    feature: feature,
    user_id,
  });
  await addSoftware.save();
  res.send({ msg: "Software Added Successfully" });
};

const DeleteSoftware = async (req, res) => {
  const id = req.params.id;
  const user_id = req.body.user_id;
  await SoftwareModel.deleteOne({ user_id: user_id, _id: id });
  res.send({ msg: "Software Deleted Successfully" });
};

const GetSoftware = async (req, res) => {
  const { title } = req.query;
  const user_id = req.body.user_id;
  console.log(title, user_id);
  if (title) {
    const result = await SoftwareModel.find({
      user_id: user_id,
      title: title,
    });
    res.send(result);
  } else {
    const result = await SoftwareModel.find({ user_id: user_id });
    res.send(result);
  }
};

const GetSoftwarebyid = async (req, res) => {
  const id = req.params.id;
  try {
    const software = await SoftwareModel.findById(id);
    res.send(software);
  } catch (error) {
    res.status(404).send({ msg: "something went wrong" });
  }
};

const UpdateSoftware = async (req, res) => {
  const id = req.params.id;
  const { title, user_id, status, description, image, price, feature } =
    req.body;

  await SoftwareModel.updateOne(
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
  res.send({ msg: "Software updated Successfully" });
};

const SoftwareController = {
  AddSoftware,
  DeleteSoftware,
  UpdateSoftware,
  GetSoftware,
  GetSoftwarebyid
};

module.exports = {
  SoftwareController,
};
