const notFoundHandler = ( req, res, next) => {
  res.locals.title = "Nifty - 404 Page"
  res.render("404");
};

const errorHandler = (err, req, res, next) => {
    res.locals.title = "Nifty - Error Page";
  res.render("error", {
    error: err,
  });
};
module.exports = { errorHandler, notFoundHandler };
