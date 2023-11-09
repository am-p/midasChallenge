import * as dotenv from "dotenv";
dotenv.config();

export const db = {
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbHost: process.env.DB_HOST,
};

export const secret = {
  jwtSecret: process.env.JWT_SECRET,
};
