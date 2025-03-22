import { Router } from "express";
import * as mealController from "../api/controllers/mealController";

const router = Router();

router.get("/", mealController.getMeals);

router.get("/:id", mealController.getMealById);

router.post("/", mealController.createMeal);

export default router;