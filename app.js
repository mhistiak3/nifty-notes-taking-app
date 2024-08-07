/*
 * Title: Nifty Project
 * Description: Root file app.js
 * Author: Istiak Ahammad
 * Date: 8/7/2024
 *
 */

// dependencies
const express = require("express");
const path = require("path");
const { APP_PORT } = require("./config");
const authRouter = require("./routes/authRouters");
const notesRoutes = require("./routes/notesRoutes");
const userRouter = require("./routes/userRouters");
const {
  errorHandler,
  notFoundHandler,
} = require("./middleware/common/errorHandler");

// app object
const app = express();

// HACK: Middleware
// Request Parser
app.use(express.json());

// set view engine
app.set("view engine", "ejs");
// set static folder
app.use(express.static(path.join(__dirname, "public")));

// Application Routes
app.use("/auth", authRouter);
app.use("/", notesRoutes);
app.use("/", userRouter);

// 404
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

// start the server
app.listen(APP_PORT, () => {
  console.log(`server start in 3000 port`);
});
