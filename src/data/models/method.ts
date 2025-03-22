
import moongoose, {Schema, Document} from 'mongoose';
import { IMethodType } from './methodType';

export interface IMethod extends Document{
    methodID: String,
    descr: String,
    methodType: IMethodType['_id']
};

export const method: Schema = new Schema({
    methodID: {type: String, required:true, unique : true},
    descr: {type: String, required: true},
    methodType: {type: Schema.Types.ObjectId, ref: 'MethodType' ,required: true}
});

export default moongoose.model<IMethod>('Method',method,'Method');