import * as mealRepository from '../repository/mealRepository'
import { IMeal } from '../models/meal'

export const getAllMeals = async (): Promise<IMeal[]> =>{
    return await mealRepository.getAllMeals();
}

export const getMealById = async(id: string): Promise<IMeal[] | null> =>{
    return await mealRepository.getMealById(id);
}

export const createMeal = async(meal: IMeal): Promise<IMeal> =>{
    return await mealRepository.createMeal(meal);
}
