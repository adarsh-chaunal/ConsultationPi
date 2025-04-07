import express from 'express';
import cors from 'cors';
// import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes';
import { loggingHandler } from './middlewares/logger.middleware';
import { authenticationHandler } from './middlewares/auth.middleware';
import { exceptionHandler } from './middlewares/exception.middleware';

// dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(loggingHandler);
// app.use(authenticationHandler);

app.use('/api/auth', authenticationHandler, authRoutes);

app.use(exceptionHandler)

export default app;