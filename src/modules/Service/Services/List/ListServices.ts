import { ErrorApp } from '../../../../shared/Errors/Errors';
import { IServiceRepository } from '../../Interfaces/Repositories';
import { ServiceRepository, Service } from '../../Repositories/ServiceRepository';

export class ListServices {

  protected RepositoryStrategy: IServiceRepository;

  constructor(RepositoryStrategy: IServiceRepository = new ServiceRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async listAll(): Promise<Service[] | ErrorApp> {

    const services = await this.RepositoryStrategy.orm.service.findMany()

    if (services) {
      return new ErrorApp('Error in get all services');
    }

    return services

  }

  async listById(id: string): Promise<Service[] | ErrorApp> {

    const services = await this.RepositoryStrategy.orm.service.findMany({
      where: {
        id: id
      }
    })

    if (services) {
      return new ErrorApp('Error in get by id services');
    }

    return services

  }

  async listByIdUser(idUser: string): Promise<Service[] | ErrorApp> {

    const services = await this.RepositoryStrategy.orm.service.findMany({
      where: {
        idUser: idUser
      }
    })

    if (services) {
      return new ErrorApp('Error in get by idUser services');
    }

    return services
  }
}
