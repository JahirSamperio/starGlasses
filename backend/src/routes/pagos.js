import {Router} from 'express';
import {listaPagos, detallesPagos} from "../controllers/pagosController.js";

const router = Router();

router.get('/', listaPagos);

router.get('/:id_pago', detallesPagos);

export default router;