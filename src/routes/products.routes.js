import { Router } from "express";
import passport from "passport";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

import "../auth/auth.js";

const router = Router();

/**
 * @openapi
 * /products:
 *   post:
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */

//This endpoint is use for create products in our database
router.post(
  "/products",
  passport.authenticate("jwt", { session: false }),
  createProduct
);
/**
 * @openapi
 * /products:
 *   get:
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 */

//This endpoint bring all the products without any permission using filter and sorting
router.get("/products", getProducts);
/**
 * @openapi
 * /products/:id:
 *   put:
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */

//We can update products in our data base with id as a reference in this endpoint
router.put(
  "/products/:id",
  passport.authenticate("jwt", { session: false }),
  updateProduct
);
/**
 * @openapi
 * /products/:id:
 *   delete:
 *     tags:
 *       - Products
 *     responses:
 *       204:
 *         description: No Content
 *         content:
 *           application/json:
 *              schema:
 */

//This enpoint is for deleting products by id
router.delete(
  "/products/:id",
  passport.authenticate("jwt", { session: false }),
  deleteProduct
);

export default router;
