const { Router } = require('express');
const CategoriesController = require('../controllers/categories.controller');
const validateToken = require('../middlewares/validateToken');
const validateCategoryName = require('../middlewares/validateCategoryName');

const categoriesRouter = Router();

categoriesRouter.post(
  '/', 
  validateToken,
  validateCategoryName,
  CategoriesController.createCategory,
);

categoriesRouter.get('/', validateToken, CategoriesController.getAll);

module.exports = categoriesRouter;