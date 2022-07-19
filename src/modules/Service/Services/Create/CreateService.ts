import { ErrorApp } from '../../../../shared/Errors/Errors';
import { IServiceRepository, Service, ServiceRepository } from '../../Repositories/ServiceRepository';
import { v4 as uuidv4 } from 'uuid';

interface IServiceCreate {
  idUser: string
  Description: string
  DurationTime: string
  Price: number
}

export class CreateService {

  protected RepositoryStrategy: IServiceRepository;

  constructor(RepositoryStrategy: IServiceRepository = new ServiceRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(ServiceProps: IServiceCreate): Promise<Service | ErrorApp> {

    const ServiceStorage = await this.RepositoryStrategy.create({
      id: uuidv4(),
      ...ServiceProps
    });

    if (!ServiceStorage) {
      return new ErrorApp('Service not created into storage');
    }

    return ServiceStorage;
  }

}