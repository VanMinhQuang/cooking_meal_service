export interface MealRequest {
    mealID: string;
    mealName: string;
    isVegan?: boolean;
    descr?: string;
    image?: string;
    category: string[]; // Category IDs
  
    steps: {  
      stepDescr: string;
      time: number;
      stepOrder: number;
      details: {
        method: string; // Method ID
        descr: string;
        ingredients: {
          ingredient: string; // Ingredient ID
          gram: number;
        }[];
      }[];
    }[];
  }