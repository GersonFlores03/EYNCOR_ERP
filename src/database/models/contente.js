'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ContentE.belongsTo(models.Entrada , {foreignKey: "entrada_id"})
    }
  }
  ContentE.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    subtitulo: {
      type: DataTypes.STRING(80),
      allowNull:false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    
    image:{
      type: DataTypes.STRING
    },

  }, {
    sequelize,
    modelName: 'ContentE',
  });
  return ContentE;
};