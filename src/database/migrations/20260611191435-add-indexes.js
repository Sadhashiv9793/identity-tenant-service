const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.addIndex("users", ["tenant_id"]);
    await queryInterface.addIndex("users", ["email"]);

    await queryInterface.addIndex("user_roles", ["tenant_id"]);
    await queryInterface.addIndex("user_roles", ["user_id"]);

    await queryInterface.addIndex("role_permissions", ["role_id"]);
    await queryInterface.addIndex("role_permissions", ["permission_id"]);
  },

  async down(queryInterface) {
    await queryInterface.removeIndex("users", ["tenant_id"]);
    await queryInterface.removeIndex("users", ["email"]);

    await queryInterface.removeIndex("user_roles", ["tenant_id"]);
    await queryInterface.removeIndex("user_roles", ["user_id"]);

    await queryInterface.removeIndex("role_permissions", ["role_id"]);
    await queryInterface.removeIndex("role_permissions", ["permission_id"]);
  },
};