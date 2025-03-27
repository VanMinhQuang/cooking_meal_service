// src/routes/mealRoute.ts
import { Router } from "express";
import { authenticate } from '../middlewares/authenticate';
import * as mealController from "../api/controllers/mealController";

const router = Router();

// #swagger.tags = ['Meals']
// #swagger.description = 'Get all meals'
// #swagger.path = '/meal'
router.get("/", mealController.getMeals);

// #swagger.tags = ['Meals']
// #swagger.description = 'Get meal by ID'
// #swagger.path = '/meal/{id}'
// #swagger.parameters['id'] = { description: 'Meal ID or name' }
router.get("/:id", mealController.getMealById);

// #swagger.tags = ['Meals']
// #swagger.description = 'Create a new meal'
// #swagger.path = '/meal'
/* #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/Meal" }
        }
      }
   } 
*/
router.post("/", mealController.createMeal);

export default router;