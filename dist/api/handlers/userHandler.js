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
exports.createUser = exports.userHandler = void 0;
const user_1 = __importDefault(require("../../data/models/user"));
const encryption_1 = require("../../middlewares/encryption");
const tokenGenerator_1 = require("../../middlewares/tokenGenerator");
const userHandler = (userRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var password = '';
        var user = yield getUser(userRequest.userName);
        try {
            password = yield (0, encryption_1.encrypt)(userRequest.password);
        }
        catch (_a) {
        }
        if (password != (user === null || user === void 0 ? void 0 : user.password)) {
            throw { statusCode: 401, error: userRequest.langID == 'vi' ? 'Sai mật khẩu' : 'Wrong password' };
        }
        const token = (0, tokenGenerator_1.generateToken)(userRequest.userName);
        return {
            userID: user.userID,
            userName: user.name,
            email: user.email,
            avatar: user.avatar
        };
    }
    catch (e) {
        throw e;
    }
});
exports.userHandler = userHandler;
const createUser = (userCreateRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var user = yield getUser(userCreateRequest.userName);
        if (user != null) {
            throw { statusCode: 401, error: userCreateRequest.langID == 'vi' ? 'Tài khoản đã tồn tại' : 'Account already existed' };
        }
        const password = yield (0, encryption_1.encrypt)(userCreateRequest.password);
        const newUser = new user_1.default({
            userID: userCreateRequest.userName,
            password: password,
            name: userCreateRequest.name,
            email: userCreateRequest.email,
            avatar: '',
            provider: 'App',
            create_date: Date.now(),
            update_date: Date.now(),
        });
        return yield user_1.default.create(newUser);
    }
    catch (e) {
        throw e;
    }
});
exports.createUser = createUser;
const getUser = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    return user_1.default.findOne({
        $or: [
            { userID: { $regex: userID, $options: "i" } }
        ]
    });
});
//# sourceMappingURL=userHandler.js.map