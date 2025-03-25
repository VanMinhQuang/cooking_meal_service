import { Router } from "express";
import * as userController from "../api/controllers/userController";

const router = Router();

router.get('/', userController.login);

router.post('/', userController.regis);

export default router;