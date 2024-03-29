import express from 'express';
import loginRouter from './auth.js'; // Importa loginController desde auth.js
import productRouter from './producto.js'; // Importa productRouter desde auth.js
import paymentsRouter from './payments.js'; // Importa paymentsRouter desde auth.js

const app = express();

app.use('/login', loginRouter);

app.use('/producto', productRouter);

app.use('/stripe', paymentsRouter);

export default app;
