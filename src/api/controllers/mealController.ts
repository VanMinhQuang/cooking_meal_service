import {Request, Response} from 'express'
import * as mealService from '../services/mealService'

export const getMeals = async (req: Request, res: Response) =>{
    try{
        const meals = await mealService.getAllMeals();
        res.status(200).json(meals);
    }catch(error){
        res.status(500).json({error: error});
    }
}

export const getMealById = async (req: Request, res: Response) =>{
    try{
        const meals = await mealService.getMealById(req.params.id);
        res.status(200).json(meals);
    }catch(e){
        res.status(500).json({error: e});
    }
}

export const createMeal = async (req: Request, res: Response) =>{
    try{
        const meal = await mealService.createMeal(req.body);
        res.status(201).json(meal);
    }catch(e){
        res.status(500).json({error: e});
    }
} 