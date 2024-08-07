/*
 * Title: Nifty Project
 * Description: Authentication Routes
 * Author: Istiak Ahammad
 * Date: 8/7/2024
 *
 */

// dependencies
const express = require("express");
const { getRegister, getLogin } = require("../controllers/authController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const authRouter = express.Router();

// Auth router all routes
// Register page
authRouter.get("/register",decorateHtmlResponse("Registration Page"), getRegister);
// login page
authRouter.get("/login", decorateHtmlResponse("Login Page"), getLogin);

module.exports = authRouter;
