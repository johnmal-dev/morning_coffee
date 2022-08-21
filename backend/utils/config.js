require("dotenv").config();

const PORT = process.env.PORT;
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const UNSPLASH_SECRET_KEY = process.env.UNSPLASH_SECRET_KEY;

const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

module.exports = {
  MONGODB_URI,
  PORT,
  UNSPLASH_ACCESS_KEY,
  UNSPLASH_SECRET_KEY,
};
