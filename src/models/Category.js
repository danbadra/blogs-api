const CategoriesModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
  },
  {
    modelName: 'categories',
    underscored: true,
    timestamps: false
  });

    return Category;
}

module.exports = CategoriesModel;