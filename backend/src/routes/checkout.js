import {Router} from 'express';
import {createCheckout} from "../controllers/paymentsController.js";

const router = Router();

router.post('/create-checkout-session/:id', createCheckout);

export default router;  