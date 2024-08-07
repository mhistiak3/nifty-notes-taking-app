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

// app object
const app = express();

// HACK: Middleware

// set view engine
app.set("view engine", "ejs");
// set static folder
app.use(express.static(path.join(__dirname, "public")));


// Application Routes
app.use("/auth", authRouter);
app.use("/", notesRoutes);
app.use("/", userRouter);

// start the server
app.listen(APP_PORT, () => {
  console.log(`server start in 3000 port`);
});
