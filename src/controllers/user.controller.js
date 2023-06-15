const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

const SECRET = process.env;

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const token = jwt.sign(payload, SECRET);

module.exports = {
  getAll,
};