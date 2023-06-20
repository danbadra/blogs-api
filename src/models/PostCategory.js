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
      foreignKey: 'post_id',
      as: 'blog_post',
      otherKey: 'category_id',
    });
    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
      as: 'categories',
    });
};

  return PostCategory;
}

module.exports = PostCategoriesModel;