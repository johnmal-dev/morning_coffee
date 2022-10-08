const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('wallpapers', {});
  response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const { firstName, lastName, email, password } = request.body;

  if (!firstName || !lastName || !email || !password) {
    return response.status(400).json({
      error: 'missing field',
    });
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return response.status(400).json({
      error: 'email must be unique',
    });
  }

  if (password.length < 6) {
    return response.status(400).json({
      error: 'password must be at least 6 characters long',
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    firstName,
    lastName,
    email,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

module.exports = usersRouter;
