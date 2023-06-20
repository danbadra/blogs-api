const CategoriesService = require('../services/categories.service');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;

  const searchedIds = await Promise.all(
    categoryIds.map((id) => CategoriesService.getCategoryById(id)),
  );

  const nonExistentId = searchedIds.find((id) => id.message === 'User does not exist');

  if (nonExistentId) {
    return res.status(400)
      .json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};