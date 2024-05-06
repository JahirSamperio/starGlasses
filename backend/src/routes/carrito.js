import {Router} from 'express';
import { agregarCarrito, modificarCarrito, eliminarProducto, obtenerCarrito } from '../controllers/carritoController.js';

const router = Router();

router.post('/:id_usuario/:id_producto', agregarCarrito);

router.put('/modify/:id_usuario/:id_producto', modificarCarrito);

router.delete('/:id_cart', eliminarProducto);

router.get('/:id_usuario', obtenerCarrito);


export default router;