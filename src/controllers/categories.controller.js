const CategoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const result = await CategoriesService.createCategory(name);

  return res.status(201).json(result.message);
};

module.exports = {
  createCategory,
};