'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.User , {foreignKey: "user_id"})
      Product.hasMany(models.ContentP , {foreignKey: "product_id"})
    }
  }
  Product.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    titulo: {
      type: DataTypes.STRING(80),
      allowNull:false
    },
    descripcion: {
      type:DataTypes.TEXT,
      allowNull: false
    },

    image:{
       type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};