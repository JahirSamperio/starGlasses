import { Router } from "express";
import { userProfile, modificarInfo } from '../controllers/usuarioController.js'

const router = Router();

router.get('/:id_usuario', userProfile);

router.put('/:id_usuario', modificarInfo);


export default router;