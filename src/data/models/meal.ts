import mongoose, {Schema, Document} from "mongoose";
import { ICategory } from "./category";
import { IMethod } from "./method";
import ingredient, { IIngredient } from "./ingredient";

export interface IMeal extends Document {
    mealID: string;
    mealName: string;
    isVegan: boolean;
    descr: string;
    image: string;
    category: ICategory["_id"][]; // Array of Category references
  }
  
 const mealSchema: Schema = new Schema({
  mealID : {type: String, required: true, unique : true},
  mealName: {type: String, required: true},
  isVegan: {type: Boolean},
  descr: {type: String},
  image: {type: String},
  category: [{ type: Schema.Types.ObjectId, ref: "Category", required: true }]
});

export default mongoose.model<IMeal>('Meal', mealSchema,'Meal');