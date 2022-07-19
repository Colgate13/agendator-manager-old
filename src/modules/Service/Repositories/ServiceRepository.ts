import { IServiceRepository } from '../Interfaces/Repositories';
import { ErrorsDb } from '../../../shared/Errors/ErrorsDb';
import { Service } from '../../../shared/infra/Prisma';
import { PrismaClient } from '../../../shared/infra/Prisma';
export { Service } from '../../../shared/infra/Prisma';
export { IServiceRepository } from '../Interfaces/Repositories';

export class ServiceRepository implements IServiceRepository {
  public orm: PrismaClient;

  constructor(ClinetDbStrategy: PrismaClient = new PrismaClient()) {
    this.orm = ClinetDbStrategy;
  }

  async create(service: Service): Promise<Service | ErrorsDb> {
    const Service = await this.orm.service.create({
      data: service
    });

    if (!Service) {
      return new ErrorsDb('Service not created', 3);
    }

    return Service;
  }
}