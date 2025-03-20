import mongoose, {Schema, Document} from "mongoose";

export interface IMeal extends Document {
    mealID: string;
    mealName: string;
    category: string[];
    method: string[];
    descr: string;
    image: string;
  }
  
 const mealSchema: Schema = new Schema({
  mealID : {type: String, required: true, unique : true},
  mealName: {type: String, required: true},
  category: {type: [String], required: true},
    method: {type: [String]},
    descr: {type: String},
    image: {type: String}
});

export default mongoose.model<IMeal>('Meal', mealSchema,'Meal');