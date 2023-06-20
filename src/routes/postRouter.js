const { Router } = require('express');
const PostController = require('../controllers/post.controller');
const validateToken = require('../middlewares/validateToken');
// const validatePostFields = require('../middlewares/validatePostFields');
// const validatePostCategoryIds = require('../middlewares/validatePostCategoryIds');

const postRouter = Router();

// postRouter.post(
//   '/', 
//   validateToken,
//   validatePostFields,
//   validatePostCategoryIds,
//   PostController.createPost,
// );

postRouter.get('/', validateToken, PostController.getAll);

module.exports = postRouter;