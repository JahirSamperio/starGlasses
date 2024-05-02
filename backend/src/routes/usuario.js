import { Router } from "express";
import { userProfile } from '../controllers/usuarioController.js'

const router = Router();

router.get('/:id_usuario', userProfile);


export default router;