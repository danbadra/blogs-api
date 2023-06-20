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

const getCategoryById = async (req, res) => {
  const { id } = req.params;

  const category = await CategoriesService.getCategoryById(id);

  if (category.type === 'USER_NOT_FOUND') {
    return res.status(404).json({ message: category.message });
  }

  return res.status(200).json(category.message);
};

module.exports = {
  createCategory,
  getAll,
  getCategoryById,
};