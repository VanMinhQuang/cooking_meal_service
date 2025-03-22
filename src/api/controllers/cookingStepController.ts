import {Request, Response} from 'express'
import * as cookingStepService from '../services/cookingStepService';

export const getAllCookingSteps = async (req: Request, res: Response) =>{
    try{
        const me = await cookingStepService.getAllCookingSteps();
        res.status(200).json(me);
    }catch(error){
        res.status(500).json({error: error});
    }
}
