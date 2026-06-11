import app from "./app";

import sequelize from "./config/database";
import redis from "./config/redis";
import { connectRabbitMQ } from "./config/rabbitmq";
import { env } from "./config/env";

const startServer = async (): Promise<void> => {
  try {
    /**
     * PostgreSQL
     */
    await sequelize.authenticate();

    console.log("✅ PostgreSQL Connected");

    /**
     * Redis
     */
    await redis.ping();

    console.log("✅ Redis Connected");

    /**
     * RabbitMQ
     */
    await connectRabbitMQ();

    console.log("✅ RabbitMQ Connected");

    /**
     * Sync Models
     * Use only for development
     */
    if (env.NODE_ENV === "development") {
      await sequelize.sync({
        alter: false,
      });

      console.log("✅ Database Synced");
    }

    /**
     * Start Server
     */
    app.listen(env.PORT, () => {
      console.log(
        `🚀 Identity Service running on http://localhost:${env.PORT}`
      );

      console.log(
        `📚 Swagger Docs: http://localhost:${env.PORT}/api-docs`
      );
    });
  } catch (error) {
    console.error("❌ Server Startup Failed", error);

    process.exit(1);
  }
};

startServer();