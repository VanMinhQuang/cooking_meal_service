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
exports.deleteMethodType = exports.createMethodType = exports.getAllMethodType = void 0;
const methodType_1 = __importDefault(require("../../data/models/methodType"));
const method_1 = __importDefault(require("../../data/models/method"));
const cookingStepDetail_1 = __importDefault(require("../../data/models/cookingStepDetail"));
const getAllMethodType = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield methodType_1.default.find();
});
exports.getAllMethodType = getAllMethodType;
const createMethodType = (meType) => __awaiter(void 0, void 0, void 0, function* () {
    const type = new methodType_1.default(meType);
    return yield methodType_1.default.create(type);
});
exports.createMethodType = createMethodType;
const deleteMethodType = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const methodsToDelete = yield method_1.default.find({ methodTypeID: { $in: ids } }).select("_id");
    const methodIDs = methodsToDelete.map((method) => method._id);
    yield cookingStepDetail_1.default.updateMany({ method: { $in: methodIDs } }, { $pull: { method: { $in: methodIDs } } });
    yield method_1.default.deleteMany({ _id: { $in: methodIDs } });
    return yield methodType_1.default.deleteMany({ methodTypeID: { $in: ids } });
});
exports.deleteMethodType = deleteMethodType;
//# sourceMappingURL=methodTypeRepository.js.map