/*
 * Title: Nifty Project
 * Description: Notes Routes
 * Author: Istiak Ahammad
 * Date: 8/7/2024
 *
 */

// dependencies
const express = require("express");
const { getNotes, addNotesPage, editNotesPage } = require("../controllers/notesController");


const notesRoutes = express.Router();

// HACK: Notes router all routes

// Notes page
notesRoutes.get("/", getNotes);
// add-note page
notesRoutes.get("/add-note", addNotesPage);
// add-note page
notesRoutes.post("/edit-note", editNotesPage);


module.exports = notesRoutes;
