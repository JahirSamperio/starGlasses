import express from 'express';
import loginRouter from './auth.js'; // Importa loginController desde auth.js
import productRouter from './producto.js'; // Importa productRouter desde auth.js
import paymentsRouter from './checkout.js'; // Importa paymentsRouter desde auth.js

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/producto', productRouter);

app.use('/payments', paymentsRouter )

export default app;
