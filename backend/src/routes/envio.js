import {Router} from 'express';
import {crearEnvio, actualizarEnvio} from "../controllers/envioController.js";

const router = Router();

router.post("/crearEnvio", crearEnvio);

router.put("/actualizarEnvio/:id_envio", actualizarEnvio);

export default router;