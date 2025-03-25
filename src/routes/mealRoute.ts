import { Router } from "express";
import { authenticate } from '../middlewares/authenticate';
import * as mealController from "../api/controllers/mealController";

const router = Router();

router.get("/", mealController.getMeals);

router.get("/:id", mealController.getMealById,);

router.post("/",authenticate, mealController.createMeal);

export default router;