'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContentPs', {
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

      product_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "Products",
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
    await queryInterface.dropTable('ContentPs');
  }
};