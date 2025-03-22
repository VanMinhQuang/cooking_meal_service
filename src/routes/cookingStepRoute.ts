import {Router} from 'express'
import * as cookingStepController from '../api/controllers/cookingStepController'

const router = Router();

router.get('/',cookingStepController.getAllCookingSteps);


export default router;