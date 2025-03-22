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
exports.deleteMeals = exports.getMealById = exports.getAllMeals = void 0;
const meal_1 = __importDefault(require("../../data/models/meal"));
const getAllMeals = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield meal_1.default.find();
});
exports.getAllMeals = getAllMeals;
const getMealById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield meal_1.default.find({
        $or: [
            { mealID: { $regex: id, $options: "i" } },
            { mealName: { $regex: id, $options: "i" } }
        ]
    });
});
exports.getMealById = getMealById;
const deleteMeals = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    return yield meal_1.default.deleteMany({ mealID: { $in: ids } });
});
exports.deleteMeals = deleteMeals;
//# sourceMappingURL=mealRepository.js.map