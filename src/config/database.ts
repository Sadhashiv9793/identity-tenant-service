import { Sequelize } from "sequelize";
import { env } from "./env";

const sequelize = new Sequelize(
  env.DB_NAME,
  env.DB_USER,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: "postgres",

    logging: false,

    define: {
      underscored: true,
      timestamps: true,
    },

    pool: {
      max: 20,
      min: 5,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;