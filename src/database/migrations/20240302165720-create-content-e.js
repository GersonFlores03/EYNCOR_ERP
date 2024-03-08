'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContentEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subtitulo: {
        type: Sequelize.STRING(80),
        allowNull:false
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      
      image:{
        type: Sequelize.STRING
      },

      entrada_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "Entradas",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      
      tipo_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
         model: "Tipos",
         key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ContentEs');
  }
};