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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIngredient = exports.getIngredientById = exports.getIngredients = void 0;
const ingredientService = __importStar(require("../services/ingredientService"));
const getIngredients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ingredients = yield ingredientService.getAllIngredients();
        res.status(200).json(ingredients);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getIngredients = getIngredients;
const getIngredientById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ingredients = yield ingredientService.getIngredientById(req.params.id);
        res.status(200).json(ingredients);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
exports.getIngredientById = getIngredientById;
const createIngredient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ingredient = yield ingredientService.createIngredient(req.body);
        res.status(201).json(ingredient);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
exports.createIngredient = createIngredient;
//# sourceMappingURL=ingredientController.js.map