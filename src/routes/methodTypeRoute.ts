import {Router} from 'express'
import * as methodTypeController from '../api/controllers/methodTypeController'

const router = Router();

router.get('/',methodTypeController.getAllMethodType);

router.post('/',methodTypeController.createMethodType);

export default router;