import { ErrorApp } from '../../../shared/Errors/Errors';
import { IClientRepository, Client, UserRepository } from '../Repositories/ClientRepository';

export class CreateClient {

  protected RepositoryStrategy: IClientRepository;

  constructor(RepositoryStrategy: IClientRepository = new UserRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(ClientProps: Client): Promise<Client | ErrorApp> {

    const ClientStorage = await this.RepositoryStrategy.create(ClientProps);

    if (!ClientStorage) {
      return new ErrorApp('Client not persist into storage');
    }

    return ClientProps;
  }

}