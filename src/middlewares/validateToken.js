// src/auth/validateJWT.js
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    // O 'verify' é uma função nativa do jwt, que decodifica o token.
    const tokenVerification = jwt.verify(token, secret);
    res.locals.user = tokenVerification;
    next();
  } catch (e) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
};