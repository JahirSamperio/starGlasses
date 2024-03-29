import {Router} from 'express';
import {autenticar, registerController, confirmarController, resetPassword, comprobarToken, newPassword} from "../controllers/authController.js";

const router = Router();

router.post('/login', autenticar);

router.post('/registro', registerController);

router.get('/confirmar/:token', confirmarController);

router.post('/olvide-password', resetPassword);

//Almacenar nueva contraseña
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', newPassword);

export default router;  
