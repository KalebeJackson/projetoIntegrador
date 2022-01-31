'use strict';

module.exports = {
  async up (queryInterface, dataTypes) {
    return await queryInterface.createTable('midia', {
      id: {
        type: dataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
          allowNull: false
      },
      episodio: { 
          type: dataTypes.INTEGER,
          allowNull: false,
      },
      duracao: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      paginas: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      capitulos: {
        type: dataTypes.INTEGER,
        allowNull: false
      }
    })
  },
  async down (queryInterface, dataTypes) {
    return await queryInterface.dropTable('midia')
  }
};
