'use strict';

module.exports = {
  up: async (queryInterface, dataTypes) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.createTable('usuarios', {
      id: {
        type: dataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nick: {
        type: dataTypes.STRING,
        allowNull: false,
    },
    email: { 
        type: dataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    permissao: { 
        type: dataTypes.STRING,
        allowNull: false,
    }

    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return await queryInterface.dropTable('usuarios')
  }
};
