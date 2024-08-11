const fs = require("fs");
const User = require("../model/userSchema");
const Note = require("../model/noteSchema");
const { COOKIE_NAME } = require("../config");

// HACK: show profile page
const getUser = (req, res, next) => {
  res.render("profile");
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

      if (oldUser && oldUser._id) {
        if (req.files.length > 0) {
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
            message: "User not found",
          },
        });
      }
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

// HACK: Delete User Account
const deleteUserHandler = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.id });

    if (user && user._id) {
      await Note.deleteMany({ user: req.user.id });
      if (user.avatar) {
        fs.unlink(`${appRoote}/public/uploads/${user.avatar}`, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
      res.clearCookie(COOKIE_NAME);
      res.json({
        message: "Delete Account success",
      });
    } else {
      res.status(500).json({
        errors: {
          message: "Problem to remove account!",
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

module.exports = { getUser, editUser, deleteUserHandler };
