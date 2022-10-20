const config = require('./utils/config');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const middleware = require('./utils/middleware');
const morgan = require('morgan');

const usersRouter = require('./controllers/users');
const wallpapersRouter = require('./controllers/wallpapers');
const weatherRouter = require('./controllers/weather');
const loginRouter = require('./controllers/login');

logger.info('connecting to', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((err) => {
    logger.error('error connecting to MongoDB: ', err.message);
  });

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use(middleware.userExtractor);

app.use('/api/users', usersRouter);
app.use('/api/wallpapers', wallpapersRouter);
app.use('/api/weather', weatherRouter);
app.use('/api/login', loginRouter);

// UNHANDLED
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
