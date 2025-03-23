import express, {Application} from 'express';
import dotenv from 'dotenv';
import {connectDB } from './config/database';
//import { setupSwagger } from "./config/swagger";
import * as route from "./routes/routeIndex";
dotenv.config(); // ✅ Call this function


const app: Application = express();
const PORT: number = Number(process.env.PORT) || 4000;
const API: string = String(process.env.API_URL);



connectDB();
app.use(express.json());


// Routes
app.use(API+'/meal', route.mealRoute);
app.use(API+'/category',route.categoryRoute);
app.use(API+'/method',route.methodRoute);
app.use(API+'/methodType',route.methodTypeRoute);
app.use(API+'/ingredient',route.ingredientRoute);
app.use(API+'/cookingStep',route.cookingStepRoute);

// app.use('/',function(req,res){
//     res.send('SUP HOMIE');
// });



//setupSwagger(app);
// Start Server
app.listen(PORT, () => {
    console.log("PORT:", process.env.PORT);
console.log("API_URL:", process.env.API_URL);
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger Docs available at http://localhost:${PORT}/swagger`);
});