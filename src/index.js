import app from "./app.js";
import { port } from "./config/default.js";
import { sequelize } from "./database/database.js";
import { swaggerDocs } from "./swagger.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(port.serverPort);
    console.log("Server is listening on port", port.serverPort);
    swaggerDocs(app, port.serverPort);
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}

main();
