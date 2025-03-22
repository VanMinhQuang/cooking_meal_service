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
exports.deleteCategorys = exports.createCategory = exports.getAllCategory = void 0;
const category_1 = __importDefault(require("../../data/models/category"));
const getAllCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_1.default.find();
});
exports.getAllCategory = getAllCategory;
const createCategory = (ca) => __awaiter(void 0, void 0, void 0, function* () {
    const category = new category_1.default(ca);
    return yield category_1.default.create(category);
});
exports.createCategory = createCategory;
const deleteCategorys = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_1.default.deleteMany({ categoryID: { $in: ids } });
});
exports.deleteCategorys = deleteCategorys;
//# sourceMappingURL=categoryRepository.js.map