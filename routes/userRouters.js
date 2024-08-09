/*
 * Title: Nifty Project
 * Description: User Profile Routes
 * Author: Istiak Ahammad
 * Date: 8/7/2024
 *
 */

// dependencies
const express = require("express");
const getUser = require("../controllers/userController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const { checkLogin } = require("../middleware/common/checkLogin");

const userRouter = express.Router();

// profile page
userRouter.get(
  "/profile",
  decorateHtmlResponse("User Profile"),
  checkLogin,
  getUser
);

module.exports = userRouter;
