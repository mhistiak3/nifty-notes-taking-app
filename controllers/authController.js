// HACK: show register page
const getRegister = (req, res, next) => {
  
  res.render("register");
};

// HACK: show register page
const getLogin = (req, res, next) => {
  res.render("login");
};


module.exports = { getRegister, getLogin };
