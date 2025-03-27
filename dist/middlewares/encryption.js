"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = encrypt;
exports.decrypt = decrypt;
const crypto_1 = __importDefault(require("crypto"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ENCRYPT_KEY = String(process.env.ENCRYPT_KEY);
const IV = crypto_1.default.randomBytes(16).toString("hex").slice(0, 16); // 16-byte IV
// Encrypt function
function encrypt(text) {
    const cipher = crypto_1.default.createCipheriv("aes-256-cbc", Buffer.from(ENCRYPT_KEY), IV);
    let encrypted = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final("hex");
    return `${IV}:${encrypted}`; // Store IV with the encrypted data
}
// Decrypt function
function decrypt(encryptedText) {
    const [iv, encrypted] = encryptedText.split(":");
    const decipher = crypto_1.default.createDecipheriv("aes-256-cbc", Buffer.from(ENCRYPT_KEY), iv);
    let decrypted = decipher.update(encrypted, "hex", "utf-8");
    decrypted += decipher.final("utf-8");
    return decrypted;
}
//# sourceMappingURL=encryption.js.map