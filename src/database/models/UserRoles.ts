import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

class UserRole extends Model {}

UserRole.init(
  {
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },

    role_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },

    tenant_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "user_roles",
    timestamps: false
  }
);

export default UserRole;