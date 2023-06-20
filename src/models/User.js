const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: false,
    defaultScope: {
      attributes: { exclude: ['password'] },
    }
  });

  User.associate = ({BlogPost}) => {
    User.hasMany(BlogPost, {foreignKey: 'userId', as: 'blogPost'});
  }

  return User;
}

module.exports = UserModel;