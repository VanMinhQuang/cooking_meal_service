import mongoose, {Schema, Document} from "mongoose";

//nutrion will be per 100g
export interface IIngredient extends Document{
    ingredientID: string,
    descr: string,
    calories: number;
    protein: number; 
    carbs: number; 
    fats: number; 
    fiber?: number; 
    sugar?: number; 
    sodium?: number; 
}

export const ingredient : Schema = new Schema({
    ingredientID: {type: String, required: true, unique: true},
    descr: {type: String, required: true},
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    carbs: { type: Number, required: true },
    fats: { type: Number, required: true },
    fiber: { type: Number, default: 0 },
    sugar: { type: Number, default: 0 },
    sodium: { type: Number, default: 0 },
});

export default mongoose.model<IIngredient>('Ingredient',ingredient,'Ingredient');