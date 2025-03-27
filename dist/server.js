"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const swagger_1 = require("./config/swagger");
const route = __importStar(require("./routes/routeIndex"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 4000;
const API = String(process.env.API_URL);
(0, database_1.connectDB)();
app.use(express_1.default.json());
// Routes
app.use(API + '/meal', route.mealRoute);
app.use(API + '/category', route.categoryRoute);
app.use(API + '/method', route.methodRoute);
app.use(API + '/methodType', route.methodTypeRoute);
app.use(API + '/ingredient', route.ingredientRoute);
app.use(API + '/cookingStep', route.cookingStepRoute);
app.use(API + '/login', route.userRoute);
// app.use('/',function(req,res){
//     res.send('SUP HOMIE');
// });
(0, swagger_1.setupSwagger)(app);
// Start Server
app.listen(PORT, () => {
    console.log("PORT:", process.env.PORT);
    console.log("API_URL:", process.env.API_URL);
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger Docs available at http://localhost:${PORT}/swagger`);
});
//# sourceMappingURL=server.js.map