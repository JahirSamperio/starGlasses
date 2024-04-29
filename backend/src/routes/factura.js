import {Router} from 'express';
import { crearFactura } from '../controllers/facturaController.js';

const router = Router();

router.post('/crear', crearFactura);

export default router;