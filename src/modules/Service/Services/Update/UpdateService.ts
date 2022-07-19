import { ErrorApp, Errors } from '../../../../shared/Errors/Errors';
import { IServiceRepository, Service, ServiceRepository } from '../../Repositories/ServiceRepository';

export class UpdateService {

  protected RepositoryStrategy: IServiceRepository;

  constructor(RepositoryStrategy: IServiceRepository = new ServiceRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async update(ServiceProps: Service): Promise<Service | ErrorApp> {

    if (!ServiceProps) {
      return new ErrorApp('Service not created into storage');
    }

    const ServiceStorage = await this.RepositoryStrategy.orm.service.update({
      where: {
        id: ServiceProps.id
      },
      data: {
        Price: ServiceProps.Price,
        Description: ServiceProps.Description
      }
    });

    if (!ServiceStorage || ServiceStorage instanceof ErrorApp) {
      return new ErrorApp('Service-UPDATE-' + Errors.services.persist.message, Errors.services.persist.code);
    }

    return ServiceProps;
  }

}