import { Router } from "express";
import * as ingredientController from "../api/controllers/ingredientController";

const router = Router();

router.get('/',ingredientController.getIngredients);
router.get('/:id',ingredientController.getIngredientById);
router.post('/',ingredientController.createIngredient);

export default router;