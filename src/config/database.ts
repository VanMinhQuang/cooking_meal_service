import mongoose from 'mongoose'
import Meal from "../models/meal";

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://quangvm:Baythatxa123@cookingmeal.dnbid.mongodb.net/CookingMeal?retryWrites=true&w=majority&appName=CookingMeal'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          };
    }catch(e){
        process.exit;
    }
}

