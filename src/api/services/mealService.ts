import * as mealRepository from '../repository/mealRepository'
import * as mealHandler from '../handlers/mealHandler'
import { IMeal } from '../../data/models/meal'
import { MealRequest } from '../../data/requests/mealRequest';

export const getAllMeals = async (): Promise<IMeal[]> =>{
    return mealRepository.getAllMeals();
}

export const getMealById = async(id: string): Promise<IMeal[] | null> =>{
    return await mealRepository.getMealById(id);
}

export const createMeal = async(meal: MealRequest): Promise<boolean> =>{
    return await mealHandler.createMealHandler(meal)
}
