import type { Request, Response } from 'express';
import userService from '../services/user.service';

class UserController {
  async create(req: Request, res: Response) {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  }
}

export default new UserController();
