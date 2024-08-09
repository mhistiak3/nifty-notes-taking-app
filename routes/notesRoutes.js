/*
 * Title: Nifty Project
 * Description: Notes Routes
 * Author: Istiak Ahammad
 * Date: 8/7/2024
 *
 */

// dependencies
const express = require("express");
const {
  getNotes,
  addNotesPage,
  editNotesPage,
} = require("../controllers/notesController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const { checkLogin } = require("../middleware/common/checkLogin");

const notesRoutes = express.Router();

// HACK: Notes router all routes

// Notes page
notesRoutes.get("/", decorateHtmlResponse("All Notes"), checkLogin, getNotes);
// add-note page
notesRoutes.get(
  "/add-note",
  decorateHtmlResponse("Add Note"),
  checkLogin,
  addNotesPage
);
// add-note page
notesRoutes.get(
  "/edit-note",
  decorateHtmlResponse("Edit Note"),
  checkLogin,
  editNotesPage
);

module.exports = notesRoutes;
