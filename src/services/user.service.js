const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const createUser = async (displayName, email, password, image) => {
  const emailAlreadyRegistered = await User.findOne({ where: { email } });

  if (emailAlreadyRegistered) {
    return { type: 'USER_ALREADY_REGISTERED', message: 'User already registered' };
  }

  await User.create({ displayName, email, password, image });

  const newUser = await User.findOne({ where: { email } });

  delete newUser.dataValues.password;

  const token = createToken(newUser.dataValues);

  return { type: null, message: token };
};

module.exports = {
  getAll,
  createUser,
};