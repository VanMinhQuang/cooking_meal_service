import mongoose from "mongoose";
import Meal,{ IMeal } from "../data/models/meal";
import CookingStep,{ ICookingStep } from "../data/models/cookingStep";
import CookingStepDetail,{ IStepDetail } from "../data/models/cookingStepDetail";
import Category,{ICategory} from '../data/models/category';
import { MealRequest } from "../data/requests/mealRequest";

export const createMealHandler = async (mealData: MealRequest) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // **1. Create Meal**

        const categories = await Category.find({ categoryID: { $in: mealData.category } }).select("_id");
        const meal = await Meal.create([{ 
            mealID: mealData.mealID,
            mealName: mealData.mealName,
            isVegan: mealData.isVegan,
            descr: mealData.descr,
            image: mealData.image,
            category: categories
        }], { session });

        // **2. Create Cooking Steps for the Meal**
        const steps = mealData.steps.map((step) => ({
            stepDescr: step.stepDescr,
            time: step.time,
            stepOrder: step.stepOrder,
            mealID: meal[0].mealID,
        }));

        const createdSteps = await CookingStep.insertMany(steps, { session });

        // **3. Create Step Details**
        const stepDetails = createdSteps.flatMap((step, index) =>
            mealData.steps[index].details.map((detail) => ({
                stepID: step.stepID,
                method: detail.method,
                descr: detail.descr,
                ingredients: detail.ingredients.map((ing) => ({
                    ingredient: ing.ingredient,
                    gram: ing.gram,
                })),
            }))
        );

        await CookingStepDetail.insertMany(stepDetails, { session });

        // **Commit Transaction**
        await session.commitTransaction();
        session.endSession();

        return true; // Return the created meal
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        return false
    }
};