import { ErrorApp } from '../../../shared/Errors/Errors';
import { client } from '../Domain/Client';
import { IClient } from '../Interfaces/Domain';
import { IClientRepository, Client, UserRepository } from '../Repositories/ClientRepository';

export class CreateClient {

  protected RepositoryStrategy: IClientRepository;

  constructor(RepositoryStrategy: IClientRepository = new UserRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(ClientProps: IClient): Promise<Client> {

    const Client = client.create(ClientProps);

    if (Client instanceof ErrorApp) {
      throw new Error('Client not created, invalid props');
    }

    const ClientStorage = await this.RepositoryStrategy.create(Client);

    if (!ClientStorage) {
      throw new Error('Client not created into storage');
    }

    return Client;
  }

}