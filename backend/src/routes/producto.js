import {Router} from 'express';
import { newProduct } from "../controllers/productoController.js";

const router = Router();

router.post('/newProduct', newProduct);


export default router
