import {Router} from 'express';
import {loginController, registerController, confirmarController} from "../controllers/authController.js";

const router = Router();

router.post('/login', loginController);

router.post('/registro', registerController);

router.get('/confirmar/:token', confirmarController);


export default router;  
