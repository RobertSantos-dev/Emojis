'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Robert',
        role: 'admin',
        email: 'robert@email.com',
        password: 'secret_admin'
      },
      {
        name: 'User',
        role: 'user',
        email: 'usuario@email.com',
        password: 'secret_user'
      }
    ], {})
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
