'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entrada.belongsTo(models.User , {foreignKey: "users_id"})
      Entrada.hasMany(models.ContentE , {foreignKey: "entrada_id"})
      //Entrada.belongsTo(models.Tipo , {foreignKey: "tipo_id" })
    }
  }
  Entrada.init({
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
    autor:{
      type: DataTypes.STRING(80),
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Entrada',
  });
  return Entrada;
};