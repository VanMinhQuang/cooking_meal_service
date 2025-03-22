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
exports.createMealHandler = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const meal_1 = __importDefault(require("../data/models/meal"));
const cookingStep_1 = __importDefault(require("../data/models/cookingStep"));
const cookingStepDetail_1 = __importDefault(require("../data/models/cookingStepDetail"));
const category_1 = __importDefault(require("../data/models/category"));
const createMealHandler = (mealData) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    try {
        // **1. Create Meal**
        const categories = yield category_1.default.find({ categoryID: { $in: mealData.category } }).select("_id");
        const meal = yield meal_1.default.create([{
                mealID: mealData.mealID,
                mealName: mealData.mealName,
                isVegan: mealData.isVegan,
                descr: mealData.descr,
                image: mealData.image,
                category: categories
            }], { session });
        // **2. Create Cooking Steps for the Meal**
        const steps = mealData.steps.map((step) => ({
            stepDescr: step.stepDescr,
            time: step.time,
            stepOrder: step.stepOrder,
            mealID: meal[0].mealID,
        }));
        const createdSteps = yield cookingStep_1.default.insertMany(steps, { session });
        // **3. Create Step Details**
        const stepDetails = createdSteps.flatMap((step, index) => mealData.steps[index].details.map((detail) => ({
            stepID: step.stepID,
            method: detail.method,
            descr: detail.descr,
            ingredients: detail.ingredients.map((ing) => ({
                ingredient: ing.ingredient,
                gram: ing.gram,
            })),
        })));
        yield cookingStepDetail_1.default.insertMany(stepDetails, { session });
        // **Commit Transaction**
        yield session.commitTransaction();
        session.endSession();
        return true; // Return the created meal
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        return false;
    }
});
exports.createMealHandler = createMealHandler;
//# sourceMappingURL=mealHandler.js.map