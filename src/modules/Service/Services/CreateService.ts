import { ErrorApp } from '../../../shared/Errors/Errors';
import { IServiceRepository, Service, ServiceRepository } from '../Repositories/ServiceRepository';

export class CreateService {

  protected RepositoryStrategy: IServiceRepository;

  constructor(RepositoryStrategy: IServiceRepository = new ServiceRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(ServiceProps: Service): Promise<Service | ErrorApp> {

    const ServiceStorage = await this.RepositoryStrategy.create(ServiceProps);

    if (!ServiceStorage) {
      return new ErrorApp('Service not created into storage');
    }

    return ServiceProps;
  }

}