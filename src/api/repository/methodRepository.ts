import Method, {IMethod} from '../../data/models/method'
import Meal from '../../data/models/meal'
import CookingStepDetail from '../../data/models/cookingStepDetail'

export const getAllMethod= async (): Promise<IMethod[]> => {
    return await Method.find().populate('methodType').exec();
};

export const getMethodById = async (id: string): Promise<IMethod[] | null> => {
    return await Method.find({
        $or: [
            { categoryID: { $regex: id, $options: "i" } }, 
            { descr: { $regex: id, $options: "i" } }
          ]
    }).populate('methodType').exec();
}

export const createMethod = async (item: IMethod): Promise<IMethod> =>{
    const method = new Method(item);
    
    return await Method.create(method);
}

export const deleteMethod  = async (ids: string[]): Promise<{ deletedCount: number }>=>{
    
     
        await CookingStepDetail.updateMany(
            { method: { $in: ids } }, 
            { $pull: { method: { $in: ids } } }
        );
    
    return await Method.deleteMany({mealID : {$in : ids}});
}