"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const path_1 = __importDefault(require("path"));
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Cooking Meal Service API",
            version: "1.0.0",
            description: "A simple API for managing meals",
        },
    },
    apis: [path_1.default.join(__dirname, "../routes/*.js")], // Use .ts for TypeScript
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
const setupSwagger = (app) => {
    app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
};
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map