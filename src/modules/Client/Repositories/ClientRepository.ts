import { client } from '../Domain/Client';
import { IClientRepository } from '../Interfaces/Repositories';
import { ErrorsDb } from '../../../shared/Errors/ErrorsDb';
import { Client } from '../../../shared/infra/Prisma';
import { PrismaClient } from '../../../shared/infra/Prisma';
export { IClientRepository } from '../Interfaces/Repositories';
export { Client } from '../../../shared/infra/Prisma';

export class UserRepository implements IClientRepository {
  private prisma: PrismaClient;

  constructor(ClinetDbStrategy: PrismaClient = new PrismaClient()) {
    this.prisma = ClinetDbStrategy;
  }

  async create(client: client): Promise<Client | ErrorsDb> {
    const Client = await this.prisma.client.create({
      data: {
        id: client.id,
        idBusiness: client.idBusiness,
        Phone: client.Phone,
        Email: client.Email,
        Name: client.Name,
        Birthday: client.Birthday,
        Address: client.Address,
        Password: client.Password,
        CheckMail: client.CheckMail,
        Balance: client.Balance
      }
    });

    if (!Client) {
      return new ErrorsDb('Client not created', 3);
    }

    return Client;
  }


}