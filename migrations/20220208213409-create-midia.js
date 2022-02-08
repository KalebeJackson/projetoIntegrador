"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.createTable("midia", {
      id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      ano_lancamento: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      temporada: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      episodio: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      duracao: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      paginas: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      capitulos: {
        type: dataTypes.INTEGER,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return await queryInterface.dropTable("midia");
  }
};
