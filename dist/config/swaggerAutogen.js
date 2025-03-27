"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const path_1 = __importDefault(require("path"));
// Tạo đối tượng định nghĩa Swagger
const doc = {
    info: {
        title: 'Cooking Meal Service API',
        description: 'API documentation for managing cooking recipes and meals',
        version: '1.0.0',
    },
    host: "localhost:4000",
    basePath: '/api',
    servers: [
        {
            url: '/api',
            description: 'Development server',
        },
    ],
    tags: [
        {
            name: 'Meals',
            description: 'Endpoints for managing meals',
        },
        {
            name: 'Ingredients',
            description: 'Endpoints for managing ingredients',
        },
        {
            name: 'Categories',
            description: 'Endpoints for managing categories',
        },
        {
            name: 'Methods',
            description: 'Endpoints for managing cooking methods',
        },
        {
            name: 'Method Types',
            description: 'Endpoints for managing method types',
        },
        {
            name: 'Cooking Steps',
            description: 'Endpoints for managing cooking steps',
        },
    ],
    // Định nghĩa các model sẽ được sử dụng trong API
    definitions: {
        Meal: {
            mealID: 'meal123',
            mealName: 'Spaghetti Bolognese',
            isVegan: false,
            descr: 'Delicious Italian pasta dish',
            image: 'url-to-image',
            category: ['id1', 'id2'],
        },
        Ingredient: {
            ingredientID: 'ing123',
            descr: 'Tomato',
            calories: 25,
            protein: 1.2,
            carbs: 5.7,
            fats: 0.3,
        },
        // Các model khác
    },
};
// Đường dẫn đến file output
const outputFile = path_1.default.resolve(__dirname, '../swagger-output.json');
// Danh sách file routes cần quét
const endpointsFiles = [
    path_1.default.resolve(__dirname, '../routes/mealRoute.ts'),
    path_1.default.resolve(__dirname, '../routes/ingredientRoute.ts'),
    path_1.default.resolve(__dirname, '../routes/categoryRoute.ts'),
    path_1.default.resolve(__dirname, '../routes/methodRoute.ts'),
    path_1.default.resolve(__dirname, '../routes/methodTypeRoute.ts'),
    path_1.default.resolve(__dirname, '../routes/cookingStepRoute.ts'),
];
// Tạo file swagger
(0, swagger_autogen_1.default)(outputFile, endpointsFiles, doc);
//# sourceMappingURL=swaggerAutogen.js.map