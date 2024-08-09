const Note = require("../model/noteSchema");

// HACK: show notes page
const getNotesPage = async (req, res, next) => {
  res.render("index");
};
// HACK: Get all notes from DB
const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find({ user: req.user.id }).select({
      __v: 0,
    });
    res.json(notes);
  } catch (error) {
    res.status(500).json({
      errors: {
        message: error.message,
      },
    });
  }
};

// HACK: Add Note Page
const addNotesPage = (req, res, next) => {
  res.render("add-note");
};

// HACK: Add new Note
const addNoteController = async (req, res, next) => {
  try {
    const newNote = new Note({
      ...req.body,
      user: req.user.id,
    });
    await newNote.save();
    res.json({
      message: "Notes add success",
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        message: error.message,
      },
    });
  }
};

const editNotesPage = (req, res, next) => {
  res.render("edit-note");
};

module.exports = {
  getNotesPage,
  getNotes,
  addNotesPage,
  editNotesPage,
  addNoteController,
};
