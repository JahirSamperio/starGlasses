import { Router } from "express";
import { getVentas, ventasHoy, ventasMes } from '../controllers/ventasController.js'

const router = Router();

router.get('/getVentas', getVentas);

router.get('/ventasHoy', ventasHoy);

router.get('/ventasMes', ventasMes);

export default router;