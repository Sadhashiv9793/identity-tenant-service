const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable("user_roles", {
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,

        references: {
          model: "users",
          key: "id",
        },

        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

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

      tenant_id: {
        type: DataTypes.UUID,
        allowNull: false,

        references: {
          model: "tenants",
          key: "id",
        },

        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });

    await queryInterface.addConstraint("user_roles", {
      fields: ["user_id", "role_id"],
      type: "primary key",
      name: "pk_user_roles",
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("user_roles");
  },
};