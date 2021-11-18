'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.CHAR
      },
      createdAt: {
        allowNull: false,
        default: Date,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        default: Date,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('personas');
  }
};