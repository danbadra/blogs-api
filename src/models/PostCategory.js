const PostCategoriesModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER
    },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false
    });

  PostCategory.associate = ({BlogPost, Category}) => {
    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: 'postId',
      as: 'blog_post',
      otherKey: 'categoryId',
    });
    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'categories',
    });
};

  return PostCategory;
}

module.exports = PostCategoriesModel;