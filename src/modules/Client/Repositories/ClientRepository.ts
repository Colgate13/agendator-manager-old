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

  async create(client: Client): Promise<Client | ErrorsDb> {
    const Client = await this.prisma.client.create({
      data: client
    });

    if (!Client) {
      return new ErrorsDb('Client not created', 3);
    }

    return Client;
  }


}