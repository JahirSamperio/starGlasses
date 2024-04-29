import {Router} from 'express';
import { crearFactura } from '../controllers/facturaController.js';

const router = Router();

router.get('/crear', crearFactura);

export default router;