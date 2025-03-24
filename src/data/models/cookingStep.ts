import mongoose, {Schema, Document} from "mongoose";
import { IMeal } from "./meal";

export interface ICookingStep extends Document {
    stepID: String,
    stepDescr: String,
    time: Number,
    stepOrder: Number,
    mealID: IMeal['_id']
}


export const cookingStep : Schema = new Schema({
    stepID: {type: String, required: true, unique: true},
    stepDescr: {type: String, required: true},
    time: {type: Number, required: true},   //in minutes
    stepOrder: {type: Number, required: true},
    mealID: {type: Schema.Types.String, ref: 'Meal', required: true}
})

export default mongoose.model<ICookingStep>('CookingStep',cookingStep,'CookingStep')