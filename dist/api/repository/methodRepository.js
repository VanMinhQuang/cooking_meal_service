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
exports.deleteMethod = exports.createMethod = exports.getMethodById = exports.getAllMethod = void 0;
const method_1 = __importDefault(require("../../data/models/method"));
const cookingStepDetail_1 = __importDefault(require("../../data/models/cookingStepDetail"));
const getAllMethod = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield method_1.default.find().populate('methodType').exec();
});
exports.getAllMethod = getAllMethod;
const getMethodById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield method_1.default.find({
        $or: [
            { categoryID: { $regex: id, $options: "i" } },
            { descr: { $regex: id, $options: "i" } }
        ]
    }).populate('methodType').exec();
});
exports.getMethodById = getMethodById;
const createMethod = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const method = new method_1.default(item);
    return yield method_1.default.create(method);
});
exports.createMethod = createMethod;
const deleteMethod = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    yield cookingStepDetail_1.default.updateMany({ method: { $in: ids } }, { $pull: { method: { $in: ids } } });
    return yield method_1.default.deleteMany({ mealID: { $in: ids } });
});
exports.deleteMethod = deleteMethod;
//# sourceMappingURL=methodRepository.js.map