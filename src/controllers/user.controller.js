const UserService = require('../services/user.service');

const getAll = async (req, res) => {
    const users = await UserService.getAll();

    if (users.type === 'NO_USER_FOUND') {
      return res.status(500).json({ message: users.message });
    }

    return res.status(200).json(users.message);
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