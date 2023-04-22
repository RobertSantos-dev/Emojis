'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('emojis', [
      {
        code: '😀',
        description: 'Rosto sorrindo',
      },{
        code: '😁',
        description: 'Rosto sorrindo com olhos sorrindo',
      },
      {
        code: '😂',
        description: 'Cara com lágrimas de alegria',
      },
      {
        code: '😃',
        description: 'Rosto sorrindo com boca aberta',
      },
      {
        code: '😄',
        description: 'Rosto sorrindo com a boca aberta e olhos sorrindo',
      },
      {
        code: '😅',
        description: 'Rosto sorrindo com boca aberta e suor frio',
      },
      {
        code: '😆',
        description: 'Rosto sorrindo com a boca aberta e olhos fechados',
      },
      {
        code: '😇',
        description: 'Rosto sorrindo com halo',
      },
      {
        code: '😉',
        description: 'Rosto piscando',
      },
      {
        code: '😊',
        description: 'Rosto sorrindo com olhos sorrindo',
      },
      {
        code: '😋',
        description: 'Comida deliciosa saborosa de cara',
      },
      {
        code: '😌',
        description: 'Rosto aliviado',
      },
      {
        code: '😍',
        description: 'Rosto sorrindo com olhos em forma de coração',
      },
      {
        code: '😎',
        description: 'Rosto sorrindo com óculos de sol',
      },
      {
        code: '😏',
        description: 'Cara sorrindo',
      },
      {
        code: '😐',
        description: 'Cara neutro',
      },
      {
        code: '😑',
        description: 'Rosto sem expressão',
      },
      {
        code: '😒',
        description: 'Rosto sem divertimento'
      },
      {
        code: '😓',
        description: 'Rosto com suor frio'
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('emojis', null, {});
  }
};
