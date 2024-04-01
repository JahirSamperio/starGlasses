import 'dotenv/config';
import { Sequelize } from 'sequelize';

import stripe from 'stripe';
const stripeCliente = stripe(process.env.STRIPE_SECRET_KEY);

//Creando la sesion a la hora de dar click en el boton de comprar carrito, esto mostrara
//El total de pago y redireccionara a una ventana de pago donde podra realizar el pago
//guía al cliente a través del proceso de compra, ofreciéndole opciones como agregar/enviar información de envío, aplicar descuentos, etc
const createCheckout = async (req, res) => {
    try {
        //Creamos el objeto shoppingCart el cual contiene los productos dentro del carrito
        const shoppingCart = req.body;

        //Creamos la sesion donde line_items toma el precio, id y cantidad por cada producto 
        const session = await stripeCliente.checkout.sessions.create({
            line_items: shoppingCart,
            mode: 'payment',
            success_url: `https://docs.stripe.com/currencies`,
            cancel_url: `https://docs.stripe.com/currencies`,
        })
        console.log(session.url);
        //Redireccionar al cliente a la pagina de pago de Stripe
        res.redirect(session.url);

    } catch (error) {
        return res.status(500).json({
            error: "Error al procesar el pago"
        })
    }
}


const eventController = (req, res) => {
    try {
        const sig = req.headers['stripe-signature'];

        let event;

        try {
            event = stripeCliente.webhooks.constructEvent(req.body, sig, process.env.STRIPE_ENDPOINT_SECRET);
        } catch (err) {
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        // Handle the event
        switch (event.type) {
            case 'checkout.session.async_payment_failed':
                const checkoutSessionAsyncPaymentFailed = event.data.object;
                // Then define and call a function to handle the event checkout.session.async_payment_failed
                break;
            case 'checkout.session.async_payment_succeeded':
                const checkoutSessionAsyncPaymentSucceeded = event.data.object;
                // Then define and call a function to handle the event checkout.session.async_payment_succeeded
                break;
            case 'checkout.session.completed':
                const checkoutSessionCompleted = event.data.object;
                console.log('Llegoo');
                console.log(checkoutSessionCompleted);
                // Then define and call a function to handle the event checkout.session.completed
                break;
            case 'checkout.session.expired':
                const checkoutSessionExpired = event.data.object;
                // Then define and call a function to handle the event checkout.session.expired
                break;
            // ... handle other event types
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        // Return a 200 response to acknowledge receipt of the event
        res.send();
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}
export {
    createCheckout,
    eventController
};