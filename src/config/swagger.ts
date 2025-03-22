import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { Application } from "express";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Cooking Meal Service API",
            version: "1.0.0",
            description: "A simple API for managing meals",
        },
    },
    apis: ["./routes/*.ts"], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export const setupSwagger = (app: Application) => {
    app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};