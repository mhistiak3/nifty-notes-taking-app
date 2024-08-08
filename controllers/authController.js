const bcrypt = require("bcrypt");
const User = require("../model/userSchema");

// HACK: show register page
const getRegister = (req, res, next) => {
  res.render("register");
};

// HACK: show register page
const getLogin = (req, res, next) => {
  res.render("login");
};

// register a user
const registerController = async (req, res, next) => {
  try {
    console.log(req.body);

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      username: req.body.username.toLowerCase(),
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

module.exports = { getRegister, getLogin, registerController };
