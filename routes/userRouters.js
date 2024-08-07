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

const userRouter = express.Router();


// profile page
userRouter.get("/profile", getUser);


module.exports = userRouter;