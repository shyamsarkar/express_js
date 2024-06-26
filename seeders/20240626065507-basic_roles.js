'use strict';
const { ALL_ROLES } = require('../constants/roles');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Roles', [
      { name: ALL_ROLES.SUPER_ADMIN, createdAt: new Date(), updatedAt: new Date() },
      { name: ALL_ROLES.COMPANY_ADMIN, createdAt: new Date(), updatedAt: new Date() },
      { name: ALL_ROLES.BRANCH_ADMIN, createdAt: new Date(), updatedAt: new Date() },
      { name: ALL_ROLES.END_USER, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
      
      
 