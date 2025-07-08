import type { ICreateUser } from '../types/user.interface';
import { hashPassword } from '../utils/bcrypt';

class UserService {
  async createUser({ name, email, password }: ICreateUser) {
    // validar se email ja tem no banco
    // fazer hash do password
    const hash = hashPassword(password);
    return hash;
  }
}

export default new UserService();
