import { Router } from "express";
import { getMeals, getMealById, createMeal } from "../controllers/mealController";

const router = Router();

/**
 * @swagger
 * /api/meals:
 *   get:
 *     summary: Get all meals
 *     description: Retrieve a list of all meals.
 *     responses:
 *       200:
 *         description: A list of meals.
 */
router.get("/", getMeals);

/**
 * @swagger
 * /api/meals/{id}:
 *   get:
 *     summary: Get a meal by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single meal.
 */
router.get("/:id", getMealById);

/**
 * @swagger
 * /api/meals:
 *   post:
 *     summary: Create a new meal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Meal created successfully.
 */
router.post("/", createMeal);

export default router;