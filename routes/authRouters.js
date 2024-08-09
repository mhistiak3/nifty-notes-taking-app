/*
 * Title: Nifty Project
 * Description: Authentication Routes
 * Author: Istiak Ahammad
 * Date: 8/7/2024
 *
 */

// dependencies
const express = require("express");
const {
  getRegister,
  getLogin,
  registerController,
  loginController,
  logout,
} = require("../controllers/authController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const {
  userRegisterValidator,
  userRagisterValidatorHandler,
} = require("../middleware/users/userRegisterValidator");
const {
  userLoginValidator,
  userLoginValidatorHandler,
} = require("../middleware/users/userLoginValidator");
const { redirectLogin, checkLogin } = require("../middleware/common/checkLogin");

const authRouter = express.Router();

// Auth router all routes
// Register page
authRouter.get(
  "/register",
  redirectLogin,
  decorateHtmlResponse("Registration Page"),
  getRegister
);
// register user
authRouter.post(
  "/register",
  redirectLogin,
  userRegisterValidator,
  userRagisterValidatorHandler,
  registerController
);
// login page
authRouter.get(
  "/login",
  redirectLogin,
  redirectLogin,
  decorateHtmlResponse("Login Page"),
  getLogin
);
// login user
authRouter.post(
  "/login",
  userLoginValidator,
  userLoginValidatorHandler,
  loginController
);

// logout
authRouter.delete("/logout", checkLogin, logout);
module.exports = authRouter;
