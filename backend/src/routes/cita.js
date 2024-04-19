import {Router} from 'express';
import { crearCita, actualizarEstado, getCitas, filtroCitas, proximasCitas } from "../controllers/citaController.js";

const router = Router();

router.post("/crearCita/:id_usuario", crearCita);

router.put("/actualizarEstado/:id_cita", actualizarEstado);

router.get("/getCitas", getCitas);

router.get("/filtro", filtroCitas);

router.get("/proximas", proximasCitas);



export default router;