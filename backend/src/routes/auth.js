import {Router} from 'express';
import {loginController, registerController, confirmarController, resetPassword} from "../controllers/authController.js";

const router = Router();

router.post('/login', loginController);

router.post('/registro', registerController);

router.get('/confirmar/:token', confirmarController);

router.post('/olvide-password', resetPassword);

export default router;  
