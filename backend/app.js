const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./utils/logger");
const mongoose = require("mongoose");
const middleware = require("./utils/middleware");
const morgan = require("morgan");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((err) => {
    logger.error("error connecting to MongoDB: ", err.message);
  });

app.use(morgan("dev"));
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.userExtractor);

module.exports = app;
