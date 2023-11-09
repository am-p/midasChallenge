import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controller.js";

const router = Router();

/**
 * @openapi
 * /users/register:
 *   post:
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Thanks for register
 */
router.post("/users/register", createUser);

/**
 * @openapi
 * /users/login:
 *   post:
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: { name, jwtTtoken }
 */
router.post("/users/login", loginUser);

export default router;
