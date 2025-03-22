import Ingredient, { IIngredient } from "../../data/models/ingredient";

export const getAllIngredients = async (): Promise<IIngredient[]> => {
    return await Ingredient.find();
};

export const getIngredientById = async (id: string): Promise<IIngredient[] | null> => {
    return await Ingredient.find({
        $or: [
            { ingredientID: { $regex: id, $options: "i" } }, 
            { descr: { $regex: id, $options: "i" } }
          ]
    });
}

export const createIngredient = async (ingredientData: IIngredient): Promise<IIngredient> =>{
    const ingredient= new Ingredient(ingredientData);
    return await Ingredient.create(ingredient);
}

export const deleteIngredients  = async (ids: string[]): Promise<{ deletedCount: number }>=>{
    return await Ingredient.deleteMany({ingredientID : {$in : ids}});
}