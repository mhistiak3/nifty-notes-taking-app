const jwt = require("jsonwebtoken");
const { COOKIE_NAME, JWT_SECRET } = require("../../config");
const User = require("../../model/userSchema");

const checkLogin = async (req, res, next) => {
  const cookie =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;
  if (cookie) {
    try {
      const token = cookie[COOKIE_NAME];
      const user = jwt.verify(token, JWT_SECRET);
      if (user && user.username) {
        try {
          const newUser = await User.findOne({ _id: user.id }).select(
            "-password"
          );
          req.user = newUser;
          if (res.locals.html) {
            res.locals.user = newUser;
          }
          next();
        } catch (error) {
          next(error.message);
        }
      } else {
        if (res.locals.html) {
          res.redirect("/");
        } else {
          res.status(500).json({
            errors: {
              common: {
                msg: error.message,
              },
            },
          });
        }
      }
    } catch (error) {
      if (res.locals.html) {
        res.redirect("/");
      } else {
        res.status(500).json({
          errors: {
            common: {
              msg: error.message,
            },
          },
        });
      }
    }
  } else {
    if (res.locals.html) {
      res.redirect("auth/login");
    } else {
      res.status(401).json({
        errors: "Athentication failed!",
      });
    }
  }
};
const redirectLogin = (req, res, next) => {
  const cookie =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;
  if (cookie) {
    res.redirect("/");
  } else {
    next();
  }
};
module.exports = { checkLogin, redirectLogin };
