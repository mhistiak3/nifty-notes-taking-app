const notFoundHandler = ( req, res, next) => {
  res.render("404");
};

const errorHandler = (err, req, res, next) => {
  res.render("error", {
    error: err,
  });
};
module.exports = { errorHandler, notFoundHandler };
