const BlogPostsModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('blog_post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER
  },
  {
    modelName: 'blog_posts',
    underscored: true,
    timestamps: false
  });

  return BlogPost;
}

module.exports = BlogPostsModel;