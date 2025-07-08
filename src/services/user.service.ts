import userRepository from '../repositories/user.repository';
import type { ICreateUser } from '../types/user.interface';
import { AppError } from '../utils/app.error';

import { hashPassword } from '../utils/bcrypt';

class UserService {
  async createUser({ name, email, password }: ICreateUser) {
    const emailExists = await userRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('E-mail already exist!', 409);
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return newUser;
  }
}

export default new UserService();
