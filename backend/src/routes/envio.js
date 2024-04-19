import {Router} from 'express';
import {crearEnvio, actualizarEnvio, filtroEnvio} from "../controllers/envioController.js";

const router = Router();

router.post("/crearEnvio", crearEnvio);

router.put("/actualizarEnvio/:id_envio", actualizarEnvio);

router.get("/filtro", filtroEnvio);

export default router;