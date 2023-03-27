'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('emojis', [
      {
        code: '1F600',
        description: 'Rosto sorrindo',
      },{
        code: '1F601',
        description: 'Rosto sorrindo com olhos sorrindo',
      },
      {
        code: '1F602',
        description: 'Cara com lágrimas de alegria',
      },
      {
        code: '1F603',
        description: 'Rosto sorrindo com boca aberta',
      },
      {
        code: '1F604',
        description: 'Rosto sorrindo com a boca aberta e olhos sorrindo',
      },
      {
        code: '1F605',
        description: 'Rosto sorrindo com boca aberta e suor frio',
      },
      {
        code: '1F606',
        description: 'Rosto sorrindo com a boca aberta e olhos fechados',
      },
      {
        code: '1F607',
        description: 'Rosto sorrindo com halo',
      },
      {
        code: '1F609',
        description: 'Rosto piscando',
      },
      {
        code: '1F60A',
        description: 'Rosto sorrindo com olhos sorrindo',
      },
      {
        code: '1F60B',
        description: 'Comida deliciosa saborosa de cara',
      },
      {
        code: '1F60C',
        description: 'Rosto aliviado',
      },
      {
        code: '1F60D',
        description: 'Rosto sorrindo com olhos em forma de coração',
      },
      {
        code: '1F60E',
        description: 'Rosto sorrindo com óculos de sol',
      },
      {
        code: '1F60F',
        description: 'Cara sorrindo',
      },
      {
        code: '1F610',
        description: 'Cara neutro',
      },
      {
        code: '1F611',
        description: 'Rosto sem expressão',
      },
      {
        code: '1F612',
        description: 'Rosto sem divertimento'
      },
      {
        code: '1F613',
        description: 'Rosto com suor frio'
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('emojis', null, {});
  }
};
