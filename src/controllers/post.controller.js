const PostService = require('../services/post.service');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { user: { id } } = res.locals;

  const result = await PostService.createPost(title, content, categoryIds, id);

  return res.status(201).json(result.message);
};

const getAll = async (req, res) => {
  const posts = await PostService.getAll();

  return res.status(200).json(posts.message);
};

module.exports = {
  createPost,
  getAll,
};