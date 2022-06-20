import { user } from '../Domain/User';
import { IUserRepository } from '../Interface/Repositories';
import { ErrorsDb } from '../../../shared/Errors/ErrorsDb';
export { IUserRepository } from '../Interface/Repositories';
export { User } from '../../../shared/infra/Prisma';
import { User } from '../../../shared/infra/Prisma';
import { PrismaClient } from '../../../shared/infra/Prisma';

export class UserRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor(ClinetDbStrategy: PrismaClient = new PrismaClient()) {
    this.prisma = ClinetDbStrategy;
  }

  async create(user: user): Promise<User | ErrorsDb> {
    const User = await this.prisma.user.create({
      data: {
        id: user.id,
        idBusiness: user.idBusiness,
        idUserPermission: user.idUserPermission,
        Name: user.Name,
        Birthday: user.Birthday,
        Cpf_cnpj: user.Cpf_cnpj,
        Phone: user.Phone,
        Email: user.Email,
        Password: user.Password
      }
    });

    if (!User) {
      return new ErrorsDb('User not created', 3);
    }

    return User;
  }


}