import {Router} from 'express'
import * as methodController from '../api/controllers/methodController'

const router = Router();

router.get('/',methodController.getAllMethods);

router.post('/',methodController.createMethod);

export default router;