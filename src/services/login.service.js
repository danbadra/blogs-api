const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const validateLogin = async (password, email) => {
  if (!email || !password) {
    return { type: 'MISSING_FIELD', message: 'Some required fields are missing' }; 
  } 

  const user = await User.findOne({ where: { email, password } });
  console.log(user);

  if (!user) {
    return { type: 'INVALID_FIELD', message: 'Invalid fields' }; 
  } 

  delete user.dataValues.password;

  const token = createToken(user.dataValues);

  return { type: null, message: token };
};

module.exports = {
  validateLogin,
};