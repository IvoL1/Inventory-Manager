import type { ICreateUser } from '../types/user.interface';

class UserService {
  create(user: ICreateUser) {
    return console.warn(user);
  }
}

export default new UserService();
