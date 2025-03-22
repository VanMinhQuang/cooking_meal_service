import mongoose, {Schema, Document} from "mongoose";
export interface ICategory extends Document {
    categoryID: string;
    descr: string;
}

export const category: Schema = new Schema({
    categoryID: {type: String, required: true, unique: true},
    desrc: {type: String, required: true}
});

export default mongoose.model<ICategory>('Category',category,'Category'); 