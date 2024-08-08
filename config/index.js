require("dotenv").config();
const { APP_NAME, APP_PORT, MONGODB_CONNECTION_URL } = process.env;
module.exports = { APP_NAME, APP_PORT, MONGODB_CONNECTION_URL };
