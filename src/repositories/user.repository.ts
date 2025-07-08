import { prisma } from '../lib/prisma';
import type { ICreateUser } from '../types/user.interface';

class UserRepository {
  async create({ name, email, password }: ICreateUser) {
    const rest = await prisma.employee.create({
      data: {
        name,
        email,
        password,
      },
      omit: {
        password: true,
        updatedAt: true,
        createdAt: true,
        whatsapp: true,
      },
    });
    return rest;
  }

  async findByEmail(email: string) {
    const result = await prisma.employee.findUnique({
      where: { email },
    });
    return result;
  }
}

export default new UserRepository();
