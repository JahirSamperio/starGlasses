import { Router } from "express";
import { getVentas, ventasHoy, ventasMes, ingresosPeriodo } from '../controllers/ventasController.js'

const router = Router();

router.get('/getVentas', getVentas);

router.get('/ventasHoy', ventasHoy);

router.get('/ventasMes', ventasMes);

router.get('/ingresos', ingresosPeriodo);

export default router;