"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
// Load your Firebase Admin SDK credentials
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(require("../serviceAccountKey.json")),
});
exports.default = firebase_admin_1.default;
//# sourceMappingURL=firebase.js.map