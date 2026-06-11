import amqp from "amqplib";
import { env } from "./env";

let channel: amqp.Channel;

export const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(env.RABBITMQ_URL);

    channel = await connection.createChannel();

    console.log("RabbitMQ Connected");

    return channel;
  } catch (error) {
    console.error("RabbitMQ Connection Failed", error);

    process.exit(1);
  }
};

export const getChannel = () => {
  if (!channel) {
    throw new Error("RabbitMQ Channel Not Initialized");
  }

  return channel;
};