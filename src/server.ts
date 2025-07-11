import express, {Application} from 'express';
import dotenv from 'dotenv';
import {connectDB } from './config/database';
import { setupSwagger } from "./config/swagger";
import * as route from "./routes/routeIndex";

dotenv.config;



const app: Application = express();
const PORT: number = Number(process.env.PORT) || 4000;
const API: string = String(process.env.API_URL);



connectDB();
app.use(express.json());

setupSwagger(app);

// Routes
app.use(API+'/meal', route.mealRoute);
app.use(API+'/category',route.categoryRoute);
app.use(API+'/method',route.methodRoute);
app.use(API+'/methodType',route.methodTypeRoute);
app.use(API+'/ingredient',route.ingredientRoute);
app.use(API+'/cookingStep',route.cookingStepRoute);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger Docs available at http://localhost:${PORT}/swagger`);
});