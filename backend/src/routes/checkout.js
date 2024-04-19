import {Router} from 'express';
import {createCheckout} from "../controllers/paymentsController.js";

const router = Router();

router.post('/create-checkout-session/:id/:id_direccion', createCheckout);

export default router;  