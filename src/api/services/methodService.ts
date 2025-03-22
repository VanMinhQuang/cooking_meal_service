import { IMethod } from '../../data/models/method';
import * as methodRepository from '../repository/methodRepository'

export const getAllMethods = async (): Promise<IMethod[]> =>{
    return await methodRepository.getAllMethod();
}


export const createMethod = async(me: IMethod): Promise<IMethod> =>{
    return await methodRepository.createMethod(me)
}
