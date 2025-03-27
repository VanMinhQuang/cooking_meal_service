import swaggerUi from "swagger-ui-express";
import { Application } from "express";
import path from "path";

export const setupSwagger = (app: Application) => {
  // Import dynamic để tránh lỗi TypeScript khi file chưa tồn tại
  try {
    const swaggerDocument = require('../swagger-output.json');
    app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  } catch (error) {
    console.error("Swagger documentation not generated. Run 'npm run swagger-autogen' first.");
  }
};