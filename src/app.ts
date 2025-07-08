import express from 'express';
import { router } from './routes';
import { errorMiddleware } from './middlewares/error.middleware';

export const app = express();

app.use(express.json());
app.use(router);
app.use(errorMiddleware);
