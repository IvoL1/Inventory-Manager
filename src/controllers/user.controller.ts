import type { Request, Response } from 'express';
import userService from '../services/user.service';

class UserController {
  async create(req: Request, res: Response) {
    const response = await userService.createUser(req.body);
    res.json(response);
  }
}

export default new UserController();
