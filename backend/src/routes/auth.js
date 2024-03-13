import {Router} from 'express';
import { body } from 'express-validator';
import {loginController, registerController} from "../controllers/authController.js";

const router = Router();

router.post('/login', loginController);

router.post('/registro', [body('email').isEmail().notEmpty(), body('password').isLength({min: 8}).notEmpty()],registerController);

export default router;  
