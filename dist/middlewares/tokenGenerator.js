"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.SERECT_KEY || "your_secret_key";
const generateToken = (userId) => {
    const token = jsonwebtoken_1.default.sign({
        UserName: userId, // Store username
    }, SECRET_KEY, {
        expiresIn: "24h", //token expires after 24h
        issuer: 'JWTAuthenticationServer',
        audience: 'JWTAuthenticationServer',
    });
    console.log(token);
    return token;
};
exports.generateToken = generateToken;
//# sourceMappingURL=tokenGenerator.js.map