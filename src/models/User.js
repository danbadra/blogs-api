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
    modelName: 'users',
    underscored: true,
    timestamps: false
  });

  User.associate = ({BlogPost}) => {
    User.hasMany(BlogPost, {foreignKey: 'id'});
  }

  return User;
}

module.exports = UserModel;