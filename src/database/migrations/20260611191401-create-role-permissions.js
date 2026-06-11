const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable("role_permissions", {
      role_id: {
        type: DataTypes.UUID,
        allowNull: false,

        references: {
          model: "roles",
          key: "id",
        },

        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      permission_id: {
        type: DataTypes.UUID,
        allowNull: false,

        references: {
          model: "permissions",
          key: "id",
        },

        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });

    await queryInterface.addConstraint("role_permissions", {
      fields: ["role_id", "permission_id"],
      type: "primary key",
      name: "pk_role_permissions",
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("role_permissions");
  },
};