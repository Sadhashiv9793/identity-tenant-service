import Redis from "ioredis";
import { env } from "./env";

const redis = new Redis(env.REDIS_URL, {
  maxRetriesPerRequest: null,
});

redis.on("connect", () => {
  console.log("Redis Connected");
});

redis.on("error", (error) => {
  console.error("Redis Error", error);
});

export default redis;