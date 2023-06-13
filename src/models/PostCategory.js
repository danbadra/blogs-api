const PostCategoriesModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER
    },
    {
      modelName: 'posts_categories',
      underscored: true,
      timestamps: false
    });

  return PostCategory;
}

module.exports = PostCategoriesModel;