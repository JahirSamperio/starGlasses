import {Router} from 'express';
import {loginController, registerController} from "../controllers/authController.js";

const router = Router();

router.post('/login', loginController);

router.post('/registro', registerController);

export default router;  
