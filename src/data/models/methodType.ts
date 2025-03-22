import mongoose, {Schema, Document} from "mongoose";

export interface IMethodType extends Document {
    methodTypeID: string;
    descr: string;
}

export const methodType: Schema = new Schema({
    methodTypeID: {type: String, required: true, unique: true},
    desrc: {type: String, required: true}
});

export default mongoose.model<IMethodType>('MethodType',methodType,'MethodType'); 