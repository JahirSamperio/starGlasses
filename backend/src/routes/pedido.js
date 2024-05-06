import {Router} from 'express';
import {getPedidos, detallesPedido, filtroPedido, actualizarEstado, pedidosRecientes, pedidoUsuario } from '../controllers/pedidoController.js'

const router = Router();

router.get("/getPedidos", getPedidos);

router.get("/detallesPedido/:id_pedido", detallesPedido);

router.get("/filtro", filtroPedido);

router.put("/actualizarEstado/:id_pedido", actualizarEstado);

router.get("/reciente", pedidosRecientes);

router.get("/:id_usuario", pedidoUsuario);

export default router;