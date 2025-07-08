import type { Request, Response } from 'express';
import userService from '../services/user.service';

class UserController {
  index(req: Request, res: Response) {
    const response = userService.create(req.body);
    res.json(req.body);
  }
}

export default new UserController();
