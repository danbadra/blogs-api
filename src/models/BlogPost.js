const BlogPostsModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    modelName: 'blog_posts',
    underscored: true,
    timestamps: false
  });

  BlogPost.associate = ({User}) => {
    BlogPost.belongsTo(User, {foreignKey: 'id'});
  }

  return BlogPost;
}

module.exports = BlogPostsModel;