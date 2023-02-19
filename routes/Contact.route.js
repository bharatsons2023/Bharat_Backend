const express = require("express");
const { ContactController } = require("../controllers/Contact.controller");
const { Authentication } = require("../middlewares/Authentication");

const ContactRouter = express.Router();
ContactRouter.post("/add",  ContactController.AddContact);
ContactRouter.get("/", ContactController.GetContact);
ContactRouter.get("/:id", ContactController.GetContactbyid);


ContactRouter.delete(
  "/delete/:id",
  Authentication,
  ContactController.DeleteContact
);

module.exports = {
  ContactRouter,
};
