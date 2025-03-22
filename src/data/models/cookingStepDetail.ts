import mongoose, { Schema, Document } from "mongoose";
import { ICookingStep } from "./cookingStep";
import { IMethod } from "./method";
import { IIngredient } from "./ingredient";

export interface IStepDetail extends Document {
  stepID: ICookingStep["_id"]; 
  method: IMethod["_id"]; 
  ingredients: { ingredient: IIngredient["_id"]; gram: number }[]; 
  descr: string; 
}

const stepDetailSchema: Schema = new Schema({
  stepID: { type: Schema.Types.ObjectId, ref: "CookingStep", required: true },
  method: { type: Schema.Types.ObjectId, ref: "Method", required: true },
  ingredients: [
    {
      ingredient: { type: Schema.Types.ObjectId, ref: "Ingredient", required: true },
      gram: { type: Number, required: true }, 
    },
  ],
  descr: { type: String, required: true }, 
});

export default mongoose.model<IStepDetail>("StepDetail", stepDetailSchema);