require("dotenv").config();
const {
  APP_NAME,
  APP_PORT,
  MONGODB_CONNECTION_URL,
  JWT_SECRET,
  JWT_EXP,
  COOKIE_NAME,
  COOKIE_SECRET,
} = process.env;
module.exports = {
  APP_NAME,
  APP_PORT,
  MONGODB_CONNECTION_URL,
  JWT_SECRET,
  JWT_EXP,
  COOKIE_NAME,
  COOKIE_SECRET,
};
