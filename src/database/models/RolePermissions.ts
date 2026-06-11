import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

class RolePermission extends Model {}

RolePermission.init(
  {
    role_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },

    permission_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: "role_permissions",
    timestamps: false
  }
);

export default RolePermission;