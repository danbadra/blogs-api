const loginService = require('../services/login.service');

const validateLogin = async (req, res) => {
  const { password, email } = req.body;

  const result = await loginService.validateLogin(password, email);

  if (result.type) return res.status(400).json({ message: result.message });

  return res.status(200).json({ token: result.message });
};

module.exports = {
  validateLogin,
};