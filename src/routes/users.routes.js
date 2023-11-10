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

// This endpoint is for creating user
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

// This endpoint is for authenticate the user
router.post("/users/login", loginUser);

export default router;
