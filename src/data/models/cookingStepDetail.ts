import mongoose, { Schema, Document } from "mongoose";
import { ICookingStep } from "./cookingStep";
import { IMethod } from "./method";
import { IIngredient } from "./ingredient";

export interface IStepDetail extends Document {
  stepID: ICookingStep["stepID"]; 
  method: IMethod["methodID"]; 
  ingredients: { ingredient: IIngredient["ingredientID"]; gram: number }[]; 
  descr: string; 
}

const stepDetailSchema: Schema = new Schema({
  stepID: { type: Schema.Types.String, ref: "CookingStep", required: true },
  method: { type: Schema.Types.String, ref: "Method", required: true },
  ingredients: [
    {
      ingredient: { type: Schema.Types.String, ref: "Ingredient", required: true },
      gram: { type: Number, required: true }, 
    },
  ],
  descr: { type: String, required: true }, 
});

export default mongoose.model<IStepDetail>("StepDetail", stepDetailSchema);