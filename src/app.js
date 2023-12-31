import express from "express";
import productsRoutes from "./routes/products.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json());
app.use(productsRoutes);
app.use(usersRoutes);

export default app;
