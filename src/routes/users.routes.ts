import { Router } from 'express';
import userController from '../controllers/user.controller';
import { schemaMiddleware } from '../middlewares/schema.middleware';
import { CreateUserSchema } from '../models/user.model';

export const userRouter = Router();

userRouter.post(
  '/users',
  schemaMiddleware(CreateUserSchema),
  userController.create
);
