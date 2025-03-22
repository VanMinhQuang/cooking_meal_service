import {Request, Response} from 'express'
import * as methodTypeService from '../services/methodTypeService'

export const getAllMethodType = async (req: Request, res: Response) =>{
    try{
        const me = await methodTypeService.getAllMethodType();
        res.status(200).json(me);
    }catch(error){
        res.status(500).json({error: error});
    }
}


export const createMethodType = async (req: Request, res: Response) =>{
    try{
        const me = await methodTypeService.createMethod(req.body);
        res.status(200).json(me);
    }catch(error){
        res.status(500).json({error: error});
    }
}
