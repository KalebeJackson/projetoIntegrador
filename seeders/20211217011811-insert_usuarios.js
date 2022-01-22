'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let usuarios = [];
     for(let i = 0;i < 100; i++){
       usuarios.push({
         nick: faker.name.firstName(),
         email: faker.internet.email(),
         senha: faker.internet.password()
       })
     }
 
     return await queryInterface.bulkInsert('usuarios', usuarios, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('usuarios', null, {});
  }
};
