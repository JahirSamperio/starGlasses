import { Router } from "express";
import { getVentas, ventasHoy } from '../controllers/ventasController.js'

const router = Router();

router.get('/getVentas', getVentas);

router.get('/ventasHoy', ventasHoy);

export default router;