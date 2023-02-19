const express = require("express");
const { SoftwareController } = require("../controllers/Software.controller");
const { Authentication } = require("../middlewares/Authentication");

const SoftwareRouter = express.Router();
SoftwareRouter.post("/add", Authentication, SoftwareController.AddSoftware);
SoftwareRouter.get("/", SoftwareController.GetSoftware);
SoftwareRouter.get("/:id", SoftwareController.GetSoftwarebyid);

SoftwareRouter.patch(
  "/update/:id",
  Authentication,
  SoftwareController.UpdateSoftware
);
SoftwareRouter.delete(
  "/delete/:id",
  Authentication,
  SoftwareController.DeleteSoftware
);

module.exports = {
  SoftwareRouter,
};
