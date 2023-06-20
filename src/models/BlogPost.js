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
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
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
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false
  });

  BlogPost.associate = ({users}) => {
    BlogPost.belongsTo(users, {foreignKey: 'id', as: 'user'});
  }

  return BlogPost;
}

module.exports = BlogPostsModel;