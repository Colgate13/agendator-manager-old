import { IUserRepository } from '../Interfaces/Repositories';
import { ErrorsDb } from '../../../shared/Errors/ErrorsDb';
export { IUserRepository } from '../Interfaces/Repositories';
export { User } from '../../../shared/infra/Prisma';
import { User } from '../../../shared/infra/Prisma';
import { PrismaClient } from '../../../shared/infra/Prisma';
import { ErrorApp } from '../../../shared/Errors/Errors';

export class UserRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor(ClinetDbStrategy: PrismaClient = new PrismaClient()) {
    this.prisma = ClinetDbStrategy;
  }

  async create(user: User): Promise<User | ErrorsDb | ErrorApp> {
    try {
      const User = await this.prisma.user.create({
        data: user
      });

      if (!User) {
        return new ErrorsDb('User not created', 3);
      }

      return User;
    } catch (error: any) {
      return new ErrorApp(error);
    }

  }


}