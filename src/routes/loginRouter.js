const { Router } = require('express');
const loginController = require('../controllers/login.controller');

const loginRouter = Router();

  loginRouter.post('/login', loginController.validateLogin);

module.exports = loginRouter;