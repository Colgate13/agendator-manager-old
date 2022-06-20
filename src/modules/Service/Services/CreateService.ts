import { ErrorApp } from '../../../shared/Errors/Errors';
import { service } from '../Domain/Service';
import { IService } from '../Interfaces/Domain';
import { IServiceRepository, Service, ServiceRepository } from '../Repositories/ServiceRepository';

export class CreateService {

  protected RepositoryStrategy: IServiceRepository;

  constructor(RepositoryStrategy: IServiceRepository = new ServiceRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(ServiceProps: IService): Promise<Service> {

    const Service = service.create(ServiceProps);

    if (Service instanceof ErrorApp) {
      throw new Error('Service not created, invalid props');
    }

    const ServiceStorage = await this.RepositoryStrategy.create(Service);

    if (!ServiceStorage) {
      throw new Error('Service not created into storage');
    }

    return Service;
  }

}