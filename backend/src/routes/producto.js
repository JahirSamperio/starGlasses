import {Router} from 'express';
import { newProduct, agregarOferta,eliminarProducto, modificarProducto, perfilProducto, allProducts } from "../controllers/productoController.js";

const router = Router();

router.post('/newProduct', newProduct);

router.post('/agregarOferta/:id_lentes', agregarOferta);

router.delete('/deleteProduct/:id_lentes', eliminarProducto);

router.put('/updateProduct/:id_lentes', modificarProducto);

router.get('/getProduct/:id_lentes', perfilProducto);

router.get('/allProducts/', allProducts);


export default router
