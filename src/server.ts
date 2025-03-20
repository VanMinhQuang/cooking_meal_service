import express, {Application} from 'express';
import dotenv from 'dotenv';
import {connectDB } from './config/database';
import { setupSwagger } from "./swagger";
import mealRoutes from "./routes/mealRoute";

dotenv.config;



const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;
const API: string = String(process.env.API_URL);



connectDB();
app.use(express.json());

setupSwagger(app);

// Routes
app.use("/api/meals", mealRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger Docs available at http://localhost:${PORT}/swagger`);
});