const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });

  return { type: null, message: newCategory };
};

const getAll = async () => {
  const categories = await Category.findAll();

  return { type: null, message: categories };
};

const getCategoryById = async (id) => {
  const category = await Category.findOne({ where: { id } });

  if (!category) return { type: 'USER_NOT_FOUND', message: 'User does not exist' };

  return { type: null, message: category };
};

module.exports = {
  createCategory,
  getAll,
  getCategoryById,
};