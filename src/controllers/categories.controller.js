const CategoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const result = await CategoriesService.createCategory(name);

  return res.status(201).json(result.message);
};

const getAll = async (req, res) => {
  const categories = await CategoriesService.getAll();

  return res.status(200).json(categories.message);
};

module.exports = {
  createCategory,
  getAll,
};