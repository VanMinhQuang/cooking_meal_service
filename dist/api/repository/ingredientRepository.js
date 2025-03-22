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
exports.deleteIngredients = exports.createIngredient = exports.getIngredientById = exports.getAllIngredients = void 0;
const ingredient_1 = __importDefault(require("../../data/models/ingredient"));
const getAllIngredients = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield ingredient_1.default.find();
});
exports.getAllIngredients = getAllIngredients;
const getIngredientById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ingredient_1.default.find({
        $or: [
            { ingredientID: { $regex: id, $options: "i" } },
            { descr: { $regex: id, $options: "i" } }
        ]
    });
});
exports.getIngredientById = getIngredientById;
const createIngredient = (ingredientData) => __awaiter(void 0, void 0, void 0, function* () {
    const ingredient = new ingredient_1.default(ingredientData);
    return yield ingredient_1.default.create(ingredient);
});
exports.createIngredient = createIngredient;
const deleteIngredients = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ingredient_1.default.deleteMany({ ingredientID: { $in: ids } });
});
exports.deleteIngredients = deleteIngredients;
//# sourceMappingURL=ingredientRepository.js.map