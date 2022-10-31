import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

export const connection: Sequelize = new Sequelize(
  String(process.env.DB_NAME),
  String(process.env.DB_USER),
  process.env.DB_PASS,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: +String(process.env.DB_PORT),
    timezone: String(process.env.TZ),
  }
);
