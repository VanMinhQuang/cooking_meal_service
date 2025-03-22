import { IIngredient } from '../../data/models/ingredient';
import * as ingredientRepository from '../repository/ingredientRepository'

export const getAllIngredients = async (): Promise<IIngredient[]> =>{
    return await ingredientRepository.getAllIngredients();
}

export const getIngredientById = async(id: string): Promise<IIngredient[] | null> =>{
    return await ingredientRepository.getIngredientById(id);
}

export const createIngredient = async(ingredient: IIngredient): Promise<IIngredient> =>{
    return await ingredientRepository.createIngredient(ingredient)
}
