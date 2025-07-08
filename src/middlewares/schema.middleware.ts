import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export function schemaMiddleware(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      next(result.error);
    }
    next();
  };
}
