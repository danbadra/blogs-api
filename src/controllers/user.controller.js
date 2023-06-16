const UserService = require('../services/user.service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const result = await UserService.createUser(displayName, email, password, image);

  if (result.type === 'USER_ALREADY_REGISTERED') { 
    return res.status(409).json({ message: result.message }); 
  }

  return res.status(201).json({ token: result.message });
};

const getAll = async (req, res) => {
    const users = await UserService.getAll();

    if (users.type === 'NO_USER_FOUND') {
      return res.status(500).json({ message: users.message });
    }

    return res.status(200).json(users.message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getUserById(id);

  if (user.type === 'USER_NOT_FOUND') {
    return res.status(404).json({ message: user.message });
  }

  return res.status(200).json(user.message);
};

module.exports = {
  createUser,
  getAll,
  getUserById,
};