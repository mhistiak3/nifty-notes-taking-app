const bcrypt = require("bcrypt");
const User = require("../model/userSchema");
const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXP, COOKIE_NAME } = require("../config");

// HACK: show register page
const getRegister = (req, res, next) => {
  res.render("register");
};

// HACK: show register page
const getLogin = (req, res, next) => {
  res.render("login");
};

// HACK: register a user
const registerController = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
      avatar: "",
      fullname: "",
    });
    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: error.message,
        },
      },
    });
  }
};
// HACK: Login User
const loginController = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        const userObj = {
          username: user.username,
          email: user.email,
          id: user._id,
        };
        const token = jwt.sign(userObj, JWT_SECRET, { expiresIn: JWT_EXP });
        res.cookie(COOKIE_NAME, token, {
          maxAge: JWT_EXP,
          httpOnly: true,
          signed: true,
        });

        // res.locals.user = userObj;

        res.json({
          message: "Login Successful",
        });
        // res.render('index');
      } else {
        throw createHttpError("Password is wrong!");
      }
    } else {
      throw createHttpError("User dose not exist!");
    }
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: error.message,
        },
      },
    });
  }
};

// HACK: logout user
const logout = (req, res, next) => {
  res.clearCookie(COOKIE_NAME);
  res.send("logout");
};
module.exports = {
  getRegister,
  getLogin,
  registerController,
  loginController,
  logout,
};
