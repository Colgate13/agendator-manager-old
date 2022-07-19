import { IClientRepository } from '../Interfaces/Repositories';
import { ErrorsDb } from '../../../shared/Errors/ErrorsDb';
import { Client } from '../../../shared/infra/Prisma';
import { PrismaClient } from '../../../shared/infra/Prisma';
export { IClientRepository } from '../Interfaces/Repositories';
export { Client } from '../../../shared/infra/Prisma';

export class UserRepository implements IClientRepository {
  public orm: PrismaClient;

  constructor(ClinetDbStrategy: PrismaClient = new PrismaClient()) {
    this.orm = ClinetDbStrategy;
  }

  async create(client: Client): Promise<Client | ErrorsDb> {
    const Client = await this.orm.client.create({
      data: client
    });

    if (!Client) {
      return new ErrorsDb('Client not created', 3);
    }

    return Client;
  }


}