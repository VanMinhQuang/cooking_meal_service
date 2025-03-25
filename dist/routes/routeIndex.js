"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = exports.ingredientRoute = exports.methodTypeRoute = exports.methodRoute = exports.cookingStepRoute = exports.categoryRoute = exports.mealRoute = void 0;
const mealRoute_1 = __importDefault(require("./mealRoute"));
exports.mealRoute = mealRoute_1.default;
const categoryRoute_1 = __importDefault(require("./categoryRoute"));
exports.categoryRoute = categoryRoute_1.default;
const cookingStepRoute_1 = __importDefault(require("./cookingStepRoute"));
exports.cookingStepRoute = cookingStepRoute_1.default;
const methodRoute_1 = __importDefault(require("./methodRoute"));
exports.methodRoute = methodRoute_1.default;
const methodTypeRoute_1 = __importDefault(require("./methodTypeRoute"));
exports.methodTypeRoute = methodTypeRoute_1.default;
const ingredientRoute_1 = __importDefault(require("./ingredientRoute"));
exports.ingredientRoute = ingredientRoute_1.default;
const userRoute_1 = __importDefault(require("./userRoute"));
exports.userRoute = userRoute_1.default;
//# sourceMappingURL=routeIndex.js.map