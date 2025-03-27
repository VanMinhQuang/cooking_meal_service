import {Request, Response} from 'express'
import * as userService from '../services/userService'

export const login = async (req: Request, res: Response) =>{
    try{
        const re = await userService.userService(req.body);
        res.status(200).json(re);
    }catch(error){
        res.status(500).json({error: error});
    }
}


export const regis = async (req: Request, res: Response) =>{
    try{
        const re = await userService.createUserService(req.body);
        res.status(200).json(re);
    }catch(error){
        res.status(500).json({error: error});
    }
}
