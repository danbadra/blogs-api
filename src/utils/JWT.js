const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

  const JWTConfig = {
    expiresIn: '120m',
  };

  const createToken = (payload) => {
    const token = jwt.sign(payload, JWT_SECRET, JWTConfig);
    return token;
  };

module.exports = {
  createToken,
};
