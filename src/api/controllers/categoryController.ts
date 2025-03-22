import {Request, Response} from 'express'
import * as categoryService from '../services/categoryService'

export const getCategorys = async (req: Request, res: Response) =>{
    try{
        const categorys = await categoryService.getAllCategorys();
        res.status(200).json(categorys);
    }catch(error){
        res.status(500).json({error: error});
    }
}

export const createCategory = async (req: Request, res: Response) =>{
    try{
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    }catch(e){
        res.status(500).json({error: e});
    }
}