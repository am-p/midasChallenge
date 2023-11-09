import swaggerJSDOC from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Products managment", version: "1.0.0" },
  },
  apis: [
    "./src/routes/products.routes.js",
    "./src/models/Product.js",
    "./src/routes/users.routes.js",
    "./src/models/User.js",
  ],
};

const swaggerSpec = swaggerJSDOC(options);

export const swaggerDocs = (app, port) => {
  // Route-Handler to visit our docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs in JSON format available
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};
