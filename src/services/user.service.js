const { User } = require('../models');
const { createToken } = require('../utils/JWT');

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

const getAll = async () => {
  const users = await User.findAll();
  
  if (!users) return { type: 'NO_USER_FOUND', message: 'Ocorreu um erro' };

  return { type: null, message: users };
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) return { type: 'USER_NOT_FOUND', message: 'User does not exist' };

  return { type: null, message: user };
};

module.exports = {
  createUser,
  getAll,
  getUserById,
};