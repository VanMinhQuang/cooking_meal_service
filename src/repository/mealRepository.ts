import Meal, { IMeal } from "../models/meal";

export const getAllMeals = async (): Promise<IMeal[]> => {
    await Meal.findOne({});
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

export const createMeal = async (mealData: IMeal): Promise<IMeal> =>{
    const meal = new Meal(mealData);
    return await Meal.create(meal);
}