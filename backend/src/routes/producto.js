import {Router} from 'express';
import { 
    newProduct, agregarOferta, eliminarProducto, modificarProducto, 
    perfilProducto, allProducts, allOffers, getStock, descStock, ascStock, 
    masVendido, eliminarOferta, modificarOferta } from "../controllers/productoController.js";

const router = Router();

router.post('/newProduct', newProduct);

router.post('/agregarOferta/:id_lentes', agregarOferta);

router.delete('/deleteProduct/:id_lentes', eliminarProducto);

router.put('/updateProduct/:id_lentes', modificarProducto);

router.get('/getProduct/:id_lentes', perfilProducto);

router.get('/allProducts/', allProducts);

router.get('/allOffers/', allOffers);

router.get('/getStock/', getStock);

router.get('/descStock/', descStock);

router.get('/ascStock/', ascStock);

router.get('/masVendido', masVendido);

router.put('/eliminarOferta/:id_lentes', eliminarOferta);

router.put('/modificarOferta/:id_lentes', modificarOferta);


export default router
