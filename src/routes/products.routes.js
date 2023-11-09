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
router.delete(
  "/products/:id",
  passport.authenticate("jwt", { session: false }),
  deleteProduct
);

export default router;
