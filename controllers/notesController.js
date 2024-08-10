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

// HACK: Edit Note Page
const editNotesPage = async (req, res, next) => {
  try {
    const note = await Note.findOne({ _id: req.params.id });

    res.render("edit-note", {
      data: note,
    });
  } catch (error) {
    next(error);
  }
};

// HACK: Edit New Note
const editNotesController = async (req, res, next) => {
  try {
    await Note.updateOne({ _id: req.params.id }, req.body);
    res.json({ message: "Update Success" });
  } catch (error) {
    res.status(500).json({
      errors: {
        message: error.message,
      },
    });
  }
};

// HACK: Delete Note
const deleteNoteController = async (req, res, next) => {
  try {
    
    await Note.deleteOne({ _id: req.params.id.trim() });
        res.json({ message: "Delete Success" });
  } catch (error) {
    
    res.status(500).json({
      errors: {
        message: error.message,
      },
    });
  }
};

module.exports = {
  getNotesPage,
  getNotes,
  addNotesPage,
  addNoteController,
  editNotesPage,
  editNotesController,
  deleteNoteController,
};
