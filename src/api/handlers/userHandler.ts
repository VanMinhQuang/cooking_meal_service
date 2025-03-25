import { AsyncResource } from 'node:async_hooks'
import User, {IUser} from '../../data/models/user'
import { UserRequest, UserCreateRequest } from '../../data/requests/userRequest'
import { decrypt, encrypt } from '../../middlewares/encryption';
import { generateToken } from '../../middlewares/tokenGenerator';
import admin from '../../config/firebase';


export const userHandler = async (userRequest : UserRequest) =>{
    try{
        var user;
        switch(userRequest.provider){
            case LoginProvider.APP:{
                user = await admin.auth().getUserByPhoneNumber(userRequest.token);
                break;
            }
            default:{
                user = await admin.auth().verifyIdToken(userRequest.token);
            }
        }

        if(user == null){
            throw {statusCode: 401, err: userRequest.langID == 'vi' ? 'Tài khoản không tồn tại' : 'Account does not exist'};
        }


        const token = generateToken(user.uid);
        var userInfo = await getUser(user.uid);

        return userInfo;
    }catch(e){
        throw e;
    }

}

export const createUserInfo = async(userCreateRequest: UserCreateRequest) =>{
    try{
        var user = await getUser(userCreateRequest.userName);
        if(user != null)
        {
            throw{statusCode: 401, error: userCreateRequest.langID == 'vi' ? 'Tài khoản đã tồn tại' : 'Account already existed' }
        }
        const newUser = new User({
            userID: userCreateRequest.userName,
            name: userCreateRequest.name,
            email: userCreateRequest.email,
            avatar: '',
            provider: userCreateRequest.provider,
            create_date: Date.now(),  
            update_date: Date.now(),  
          });
          return await User.create(newUser);
    }catch(e){
        throw e;
    }
}



const getUser = async (userID: string): Promise<IUser | null> =>  User.findOne({
    $or: [
        { userID: { $regex: userID, $options: "i" } }
      ]
});