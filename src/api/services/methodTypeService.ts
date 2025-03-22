
import { IMethodType } from '../../data/models/methodType';
import * as methodRepository from '../repository/methodTypeRepository'

export const getAllMethodType = async (): Promise<IMethodType[]> =>{
    return await methodRepository.getAllMethodType();
}


export const createMethod = async(me: IMethodType): Promise<IMethodType> =>{
    return await methodRepository.createMethodType(me)
}
