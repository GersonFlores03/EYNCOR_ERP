'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tipo.hasMany(models.ContentE , {foreignKey: "tipo_id"})
    }
  }
  Tipo.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING(80),
      allowNull:false
    },
    descripcion:{
      type: DataTypes.TEXT,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Tipo',
  });
  return Tipo;
};