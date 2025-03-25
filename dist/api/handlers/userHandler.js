"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserInfo = exports.userHandler = void 0;
const user_1 = __importDefault(require("../../data/models/user"));
const tokenGenerator_1 = require("../../middlewares/tokenGenerator");
const firebase_1 = __importDefault(require("../../config/firebase"));
const userHandler = (userRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var user;
        switch (userRequest.provider) {
            case LoginProvider.APP: {
                user = yield firebase_1.default.auth().getUserByPhoneNumber(userRequest.token);
                break;
            }
            default: {
                user = yield firebase_1.default.auth().verifyIdToken(userRequest.token);
            }
        }
        if (user == null) {
            throw { statusCode: 401, err: userRequest.langID == 'vi' ? 'Tài khoản không tồn tại' : 'Account does not exist' };
        }
        const token = (0, tokenGenerator_1.generateToken)(user.uid);
        var userInfo = yield getUser(user.uid);
        return userInfo;
    }
    catch (e) {
        throw e;
    }
});
exports.userHandler = userHandler;
const createUserInfo = (userCreateRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var user = yield getUser(userCreateRequest.userName);
        if (user != null) {
            throw { statusCode: 401, error: userCreateRequest.langID == 'vi' ? 'Tài khoản đã tồn tại' : 'Account already existed' };
        }
        const newUser = new user_1.default({
            userID: userCreateRequest.userName,
            name: userCreateRequest.name,
            email: userCreateRequest.email,
            avatar: '',
            provider: userCreateRequest.provider,
            create_date: Date.now(),
            update_date: Date.now(),
        });
        return yield user_1.default.create(newUser);
    }
    catch (e) {
        throw e;
    }
});
exports.createUserInfo = createUserInfo;
const getUser = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    return user_1.default.findOne({
        $or: [
            { userID: { $regex: userID, $options: "i" } }
        ]
    });
});
//# sourceMappingURL=userHandler.js.map