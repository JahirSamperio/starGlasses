import {Router} from 'express';
import {agregarDireccion, editarDireccion, getDireccion, eliminarDireccion} from "../controllers/direccionController.js";

const router = Router();

router.post("/agregarDireccion/:id_usuario", agregarDireccion);

router.put("/editarDireccion/:id_direccion", editarDireccion);

router.get("/getDireccion/:id_usuario", getDireccion);

router.delete("/:id_direccion", eliminarDireccion);

export default router;