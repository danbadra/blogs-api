const UserService = require('../services/user.service');

const getAll = async (req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const result = await UserService.createUser(displayName, email, password, image);

  if (result.type === 'USER_ALREADY_REGISTERED') { 
    return res.status(409).json({ message: result.message }); 
  }

  return res.status(201).json({ token: result.message });
};

module.exports = {
  getAll,
  createUser,
};