import swaggerAutogen from 'swagger-autogen';
import path from 'path';
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
const outputFile = path.resolve(__dirname, '../swagger-output.json');

// Danh sách file routes cần quét
const endpointsFiles = [
  path.resolve(__dirname, '../routes/mealRoute.ts'),
  path.resolve(__dirname, '../routes/ingredientRoute.ts'),
  path.resolve(__dirname, '../routes/categoryRoute.ts'),
  path.resolve(__dirname, '../routes/methodRoute.ts'),
  path.resolve(__dirname, '../routes/methodTypeRoute.ts'),
  path.resolve(__dirname, '../routes/cookingStepRoute.ts'),
];

// Tạo file swagger
swaggerAutogen(outputFile, endpointsFiles, doc);