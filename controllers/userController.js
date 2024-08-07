// HACK: show profile page
const getUser = (req, res, next) => {
  res.render("profile");
};

module.exports = getUser