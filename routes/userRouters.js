/*
 * Title: Nifty Project
 * Description: User Profile Routes
 * Author: Istiak Ahammad
 * Date: 8/7/2024
 *
 */

// dependencies
const express = require("express");
const { getUser, editUser, deleteUserHandler } = require("../controllers/userController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const { checkLogin } = require("../middleware/common/checkLogin");
const avatarUpload = require("../middleware/avatarUpload");

const userRouter = express.Router();

// HACK: profile page
userRouter.get(
  "/profile",
  decorateHtmlResponse("User Profile"),
  checkLogin,
  getUser
);

// HACK: Edit Profile Page
userRouter.put("/profile", checkLogin, avatarUpload, editUser);
// HACK: Edit Profile Page
userRouter.delete("/profile/:id", checkLogin, deleteUserHandler);

module.exports = userRouter;
