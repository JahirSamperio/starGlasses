import {Router} from 'express';
import { crearFactura } from '../controllers/facturaController.js';

const router = Router();

router.get('/:id_pedido', crearFactura);

export default router;