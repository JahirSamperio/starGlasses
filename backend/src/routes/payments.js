import express from 'express';
import bodyParser from 'body-parser';
import {Router} from 'express';
import {createCheckout, eventController} from "../controllers/paymentsController.js";

const router = Router();

router.post('/create-checkout-session', createCheckout);

router.post('/webhook', bodyParser.raw({ type: 'application/json' }), eventController );

export default router;  
