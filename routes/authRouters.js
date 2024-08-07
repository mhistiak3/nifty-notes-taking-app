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

const authRouter = express.Router();

// Auth router all routes
// Register page
authRouter.get("/register",getRegister);
// login page
authRouter.get("/login",getLogin);

module.exports = authRouter;
