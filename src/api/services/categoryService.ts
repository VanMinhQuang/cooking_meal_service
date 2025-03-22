import { ICategory } from '../../data/models/category';
import * as categoryRepository from '../repository/categoryRepository'

export const getAllCategorys = async (): Promise<ICategory[]> =>{
    return await categoryRepository.getAllCategory();
}


export const createCategory = async(ingredient: ICategory): Promise<ICategory> =>{
    return await categoryRepository.createCategory(ingredient)
}
