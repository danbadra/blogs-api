const { Router } = require('express');
const userController = require('../controllers/user.controller');
const validateUserEmail = require('../middlewares/validateUserEmail');
const validateUserPassword = require('../middlewares/validateUserPassword');
const validateUserName = require('../middlewares/validateUserName');

const userRouter = Router();

  userRouter.post(
  '/', 
  validateUserEmail,
  validateUserPassword,
  validateUserName,
  userController.createUser,
);

module.exports = userRouter;