import MethodType, {IMethodType} from '../../data/models/methodType'
import Method from '../../data/models/method'
import CookingStepDetail from '../../data/models/cookingStepDetail'

export const getAllMethodType = async (): Promise<IMethodType[]> => {
    return await MethodType.find();
};

export const createMethodType= async (meType: IMethodType): Promise<IMethodType> =>{
    const type = new MethodType(meType);
    return await MethodType.create(type);
}

export const deleteMethodType  = async (ids: string[]): Promise<{ deletedCount: number }>=>{

    const methodsToDelete = await Method.find({ methodTypeID: { $in: ids } }).select("_id");
    const methodIDs = methodsToDelete.map((method) => method._id);

 
    await CookingStepDetail.updateMany(
        { method: { $in: methodIDs } }, 
        { $pull: { method: { $in: methodIDs } } }
    );

    
    await Method.deleteMany({ _id: { $in: methodIDs } });

  
    return await MethodType.deleteMany({ methodTypeID: { $in: ids } });
}