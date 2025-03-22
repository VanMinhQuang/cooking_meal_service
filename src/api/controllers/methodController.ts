import {Request, Response} from 'express'
import * as methodService from '../services/methodService'

export const getAllMethods = async (req: Request, res: Response) =>{
    try{
        const methods = await methodService.getAllMethods();
        res.status(200).json(methods);
    }catch(error){
        res.status(500).json({error: error});
    }
}

export const createMethod = async (req: Request, res: Response) =>{
    try{
        const method = await methodService.createMethod(req.body);
        res.status(201).json(method);
    }catch(e){
        res.status(500).json({error: e});
    }
}