"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const setupSwagger = (app) => {
    // Import dynamic để tránh lỗi TypeScript khi file chưa tồn tại
    try {
        const swaggerDocument = require('../swagger-output.json');
        app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
    }
    catch (error) {
        console.error("Swagger documentation not generated. Run 'npm run swagger-autogen' first.");
    }
};
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map