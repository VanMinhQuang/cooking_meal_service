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
exports.getCookingStepById = exports.getAllCookingSteps = void 0;
const cookingStep_1 = __importDefault(require("../../data/models/cookingStep"));
const getAllCookingSteps = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield cookingStep_1.default.find();
});
exports.getAllCookingSteps = getAllCookingSteps;
const getCookingStepById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cookingStep_1.default.find({
        $or: [
            { stepID: { $regex: id, $options: "i" } }
        ]
    });
});
exports.getCookingStepById = getCookingStepById;
//# sourceMappingURL=cookingStepRepository.js.map