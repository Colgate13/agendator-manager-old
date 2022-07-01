import { ErrorApp } from '../../../shared/Errors/Errors';
import { IClientRepository, Client, UserRepository } from '../Repositories/ClientRepository';

export class CreateClient {

  protected RepositoryStrategy: IClientRepository;

  constructor(RepositoryStrategy: IClientRepository = new UserRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(ClientProps: Client): Promise<Client> {

    const ClientStorage = await this.RepositoryStrategy.create(ClientProps);

    if (!ClientStorage) {
      throw new Error('Client not created into storage');
    }

    return ClientProps;
  }

}