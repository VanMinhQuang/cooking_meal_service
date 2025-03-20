"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const swagger_1 = require("./swagger");
const mealRoute_1 = __importDefault(require("./routes/mealRoute"));
dotenv_1.default.config;
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
const API = String(process.env.API_URL);
(0, database_1.connectDB)();
app.use(express_1.default.json());
(0, swagger_1.setupSwagger)(app);
// Routes
app.use("/api/meals", mealRoute_1.default);
// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger Docs available at http://localhost:${PORT}/swagger`);
});
//# sourceMappingURL=server.js.map