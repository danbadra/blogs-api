const { BlogPost } = require('../models');
const { PostCategory } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

const createPostCategory = async (categoryId, postId) => {
  const newPostCategory = await PostCategory.create({ categoryId, postId });
  
  return { type: null, message: newPostCategory };
};

const createPost = async (title, content, categoryIds, userId) => {
  const { datavalues } = await BlogPost.create({ title,
    content,
    userId,
    published: new Date(),
    updated: new Date(), 
  });

  const map = categoryIds.map((id) => createPostCategory(id, datavalues.id));

  await Promise.all(map);

  return { type: null, message: datavalues };
};

const getAll = async () => {
  const posts = await BlogPost.findAll(
      {
        include: [
          { 
            model: User, 
            as: 'user',
          },
          {
            model: Category,
            as: 'categories',
            through: { attributes: [] },
          },
        ],
      },
  );

  return { type: null, message: posts };
};

module.exports = {
  createPost,
  createPostCategory,
  getAll,
};