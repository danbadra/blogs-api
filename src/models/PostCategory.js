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

  PostCategory.associate = ({BlogPost, Category}) => {
    Category.belongsToMany(BlogPost, {
      through: PostCategory
    });
    BlogPost.belongsToMany(Category, {
      through: PostCategory
    });
};

  return PostCategory;
}

module.exports = PostCategoriesModel;