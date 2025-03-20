"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mealController_1 = require("../controllers/mealController");
const router = (0, express_1.Router)();
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
router.get("/", mealController_1.getMeals);
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
router.get("/:id", mealController_1.getMealById);
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
router.post("/", mealController_1.createMeal);
exports.default = router;
//# sourceMappingURL=mealRoute.js.map