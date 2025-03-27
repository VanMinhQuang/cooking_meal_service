import { UserCreateRequest, UserRequest } from '../../data/requests/userRequest';
import * as handler from '../handlers/userHandler'

export const userService = async(userRequest: UserRequest) => handler.userHandler(userRequest);
export const createUserService =async(userCreateRequest: UserCreateRequest) => handler.createUserInfo(userCreateRequest);