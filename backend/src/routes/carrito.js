import {Router} from 'express';
import { agregarCarrito } from '../controllers/carritoController.js';

const router = Router();

router.post('/:id_usuario/:id_producto', agregarCarrito);

export default router;