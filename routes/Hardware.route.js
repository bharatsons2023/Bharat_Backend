const express = require("express");
const { HardwareController } = require("../controllers/Hardware.controller");
const { Authentication } = require("../middlewares/Authentication");

const HardwareRouter = express.Router();
HardwareRouter.post("/add", Authentication, HardwareController.AddHardware);
HardwareRouter.get("/", HardwareController.GetHardware);
HardwareRouter.get("/:id", HardwareController.GetHardwarebyid);

HardwareRouter.patch(
  "/update/:id",
  Authentication,
  HardwareController.UpdateHardware
);
HardwareRouter.delete(
  "/delete/:id",
  Authentication,
  HardwareController.DeleteHardware
);

module.exports = {
  HardwareRouter,
};
