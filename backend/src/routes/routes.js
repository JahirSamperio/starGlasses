import express from 'express';
import loginRouter from './auth.js'; // Importa loginController desde auth.js
import productRouter from './producto.js'; // Importa productRouter desde auth.js
import paymentsRouter from './checkout.js'; // Importa paymentsRouter desde auth.js
import envioRouter from './envio.js'
import direccionRouter from './direccion.js'
import citaRouter from './cita.js'
import ventasRouter from './ventas.js'
import pedidoRouter from './pedido.js'
import pagosRouter from './pagos.js'
import facturaRouter from './factura.js'
import usuarioRouter from './usuario.js'

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/producto', productRouter);

app.use('/payments', paymentsRouter )

app.use('/envio', envioRouter );

app.use('/direccion', direccionRouter);

app.use('/cita', citaRouter);

app.use('/ventas', ventasRouter);

app.use('/pedido', pedidoRouter);

app.use('/pagos', pagosRouter);

app.use('/factura', facturaRouter);

app.use('/usuario', usuarioRouter);

export default app;
