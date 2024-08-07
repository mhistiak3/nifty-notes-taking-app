// HACK: show notes page
const getNotes = (req, res, next) => {
  res.render("index");
};
const addNotesPage = (req, res, next) => {
  res.render("add-note");
};
const editNotesPage = (req, res, next) => {
  res.render("edit-note");
};

module.exports = { getNotes, addNotesPage, editNotesPage };