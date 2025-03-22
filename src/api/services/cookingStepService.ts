import * as cookingStepRepository from '../repository/cookingStepRepository'
import { ICookingStep } from '../../data/models/cookingStep'

export const getAllCookingSteps = async (): Promise<ICookingStep[]> =>{
    return await cookingStepRepository.getAllCookingSteps();
}


