import Sequelize from "sequelize";
import { db } from "../config/default.js";

export const sequelize = new Sequelize(db.dbName, db.user, db.dbPass, {
  host: db.dbHost,
  dialect: "postgres",
});
