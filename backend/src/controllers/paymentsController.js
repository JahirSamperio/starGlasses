import 'dotenv/config';
import { Sequelize } from 'sequelize';
import { Producto, Precio, Pedido, Prod_pedido, Direccion, Usuario, Pago } from '../models/asosiations.js'
import { generateId } from '../helpers/tokens.js';
import fecha_actual from '../helpers/fecha_actual.js';

import stripe from 'stripe';
const stripeCliente = stripe(process.env.STRIPE_SECRET_KEY);

//Creando la sesion a la hora de dar click en el boton de comprar carrito, esto mostrara
//El total de pago y redireccionara a una ventana de pago donde podra realizar el pago
//guía al cliente a través del proceso de compra, ofreciéndole opciones como agregar/enviar información de envío, aplicar descuentos, etc
const createCheckout = async (req, res) => {
    try {
        const idCliente = req.params.id
        const id_direccion = req.params.id_direccion;

        //Creamos el objeto shoppingCart el cual contiene los productos dentro del carrito
        const shoppingCart = req.body;
        console.log(shoppingCart);

        // Creamos un arreglo para almacenar los datos de los productos
        const datosArray = [];

        

        // Recorremos el carrito de compras
        for (const item of shoppingCart) {
            // Buscamos el producto en la base de datos basándonos en el ID del precio
            const producto = await Producto.findOne({ where: { id_precio: item.price } });

            // Si encontramos el producto, agregamos los datos al arreglo
            if (producto) {
                datosArray.push({
                    product_data: producto.id_lentes, // Suponiendo que el ID del producto se llama id_producto
                    quantity: item.quantity
                });
            }
        }

        //Lo pasamos a string para ser aceptado por stripe
        const datosProductos = JSON.stringify(datosArray);
        // Creamos los metadatos que incluyen el ID de la dirección
        const metadata = {
            direccion_id: id_direccion,
            datosProductos:  datosProductos ,
        };

        //Creamos la sesion donde line_items toma el precio, id y cantidad por cada producto 
        const session = await stripeCliente.checkout.sessions.create({
            line_items: shoppingCart,
            mode: 'payment',
            customer: idCliente,
            metadata: metadata,
            success_url: `http://localhost:5173/`,
            cancel_url: `http://localhost:5173/recomendations`,
        })
        console.log(session.url);
        console.log(session.metadata);
        //Redireccionar al cliente a la pagina de pago de Stripe
        res.redirect(session.url);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error al procesar el pago",
            // err error
        })
    }
}


const eventController = async (req, res) => {
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

                //Lo pasamos a string para ser aceptado por stripe
                const metadata = checkoutSessionCompleted.metadata;

                const datosProductos = metadata.datosProductos

                //Parseo JSON en string
                const id_direccion = metadata.direccion_id;

                // Convertir la cadena JSON en un objeto
                const productos = JSON.parse(datosProductos);

                //Crear el pedido 
                const idPedido = generateId();

                //Fecha de hoy
                const fecha = fecha_actual;

                //Metodo de pago
                const metodoPago = checkoutSessionCompleted.payment_method_types[0];

                //Crear PEDIDO
                const pedido = await Pedido.create({
                    id_pedido: idPedido,
                    id_usuario: checkoutSessionCompleted.customer,
                    id_direccion: id_direccion,
                    fecha_pedido: fecha,
                    estado: 'Pendiente',
                    metodo_pago: metodoPago
                })

                //Añadir productos al pedido
                for (let producto of productos) {
                    let id_lentes = producto.product_data;
                    let product = await Producto.findOne({where : {id_lentes}});
                    
                    let prod_pedido = await Prod_pedido.create({
                        id_pedido: idPedido,
                        id_lentes: id_lentes,
                        cantidad: producto.quantity
                    })
                };

                //Crear PAGO
                await Pago.create({
                    id_pago: generateId(),
                    id_usuario: checkoutSessionCompleted.customer,
                    id_sesion: checkoutSessionCompleted.id,
                    id_pedido: idPedido,
                    monto: checkoutSessionCompleted.amount_total,
                    moneda: checkoutSessionCompleted.currency,
                    estado: "Completado"
                })
                    
                

                console.log("Informacion del producto => ", productos);


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
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor",

        })
    }
}
export {
    createCheckout,
    eventController
};