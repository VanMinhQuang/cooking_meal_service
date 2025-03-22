import {Request, Response} from 'express'
import * as ingredientService from '../services/ingredientService'

export const getIngredients = async (req: Request, res: Response) =>{
    try{
        const ingredients = await ingredientService.getAllIngredients();
        res.status(200).json(ingredients);
    }catch(error){
        res.status(500).json({error: error});
    }
}

export const getIngredientById = async (req: Request, res: Response) =>{
    try{
        const ingredients = await ingredientService.getIngredientById(req.params.id);
        res.status(200).json(ingredients);
    }catch(e){
        res.status(500).json({error: e});
    }
}

export const createIngredient = async (req: Request, res: Response) =>{
    try{
        const ingredient = await ingredientService.createIngredient(req.body);
        res.status(201).json(ingredient);
    }catch(e){
        res.status(500).json({error: e});
    }
}