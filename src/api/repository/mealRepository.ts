import Meal, { IMeal } from "../../data/models/meal";

export const getAllMeals = async (): Promise<IMeal[]> => {
    return await Meal.find();
};

export const getMealById = async (id: string): Promise<IMeal[] | null> => {
    return await Meal.find({
        $or: [
            { mealID: { $regex: id, $options: "i" } }, 
            { mealName: { $regex: id, $options: "i" } }
          ]
    });
}

export const deleteMeals  = async (ids: string[]): Promise<{ deletedCount: number }>=>{
    return await Meal.deleteMany({mealID : {$in : ids}});
}