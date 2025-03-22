import {Router} from 'express'
import * as categoryController from '../api/controllers/categoryController'

const router = Router();

router.get('/',categoryController.getCategorys);

router.post('/',categoryController.createCategory);

export default router;