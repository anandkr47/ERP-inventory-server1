const express = require("express");
const {
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getContactById,
} = require("../controllers/contactcontroller");
const Router = express.Router();

Router.route("/contact").get(getContact).post(createContact);
Router.route("/contact/:id").put(updateContact).delete(deleteContact).get(getContactById);

module.exports = Router;
