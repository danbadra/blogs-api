const { Router } = require('express');
const userController = require('../controllers/user.controller');
const validateUserEmail = require('../middlewares/validateUserEmail');
const validateUserPassword = require('../middlewares/validateUserPassword');
const validateUserName = require('../middlewares/validateUserName');
const validateToken = require('../middlewares/validateToken');

const userRouter = Router();

userRouter.post(
  '/', 
  validateUserEmail,
  validateUserPassword,
  validateUserName,
  userController.createUser,
);

userRouter.get('/', validateToken, userController.getAll);
userRouter.get('/:id', validateToken, userController.getUserById);

module.exports = userRouter;