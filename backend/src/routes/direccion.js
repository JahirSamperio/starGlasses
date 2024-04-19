import {Router} from 'express';
import {agregarDireccion, editarDireccion, getDireccion} from "../controllers/direccionController.js";

const router = Router();

router.post("/agregarDireccion/:id_usuario", agregarDireccion);

router.put("/editarDireccion/:id_direccion", editarDireccion);

router.get("/getDireccion/:id_usuario", getDireccion);

export default router;