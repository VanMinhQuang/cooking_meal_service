import mongoose, {Schema, Document, SchemaTypes} from "mongoose";

export interface IUser extends Document{
    userID: string,
    name: string,
    email: string,
    avatar: string,
    provider: string,
    create_date: Date,
    update_date: Date
}

export const user: Schema = new Schema({
    userID: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    email: {type: String},
    avatar: {type: String},
    provider: {type: String, required: true},
    create_date: {type: SchemaTypes.Date},
    update_date: {type: SchemaTypes.Date}
});

export default mongoose.model<IUser>('User',user,'User')