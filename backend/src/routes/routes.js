import express from 'express';
import loginRouter from './auth.js'; // Importa loginController desde auth.js

const app = express();

app.use('/login', loginRouter);

export default app;
