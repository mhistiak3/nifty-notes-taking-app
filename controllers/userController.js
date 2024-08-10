const fs = require("fs");
const User = require("../model/userSchema");

// HACK: show profile page
const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    res.render("profile", {
      user,
    });
  } catch (error) {
    next(error);
  }
};

// HACK: show profile page
const editUser = async (req, res, next) => {
  try {
    const { fullname } = req.body;
    if (req.files.length > 0 || fullname) {
      const oldUser = await User.findByIdAndUpdate(
        { _id: req.user.id },
        { fullname, avatar: req.files[0]?.filename }
      );
      if (req.files.length > 0) {
        //  oldUser.avatar;
        fs.unlink(`${appRoote}/public/uploads/${oldUser.avatar}`, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
      res.json({ message: "Profile Update Success" });
    } else {
      res.status(500).json({
        errors: {
          message: "Your all field is empty",
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      errors: {
        message: error.message,
      },
    });
  }
};

module.exports = { getUser, editUser };
