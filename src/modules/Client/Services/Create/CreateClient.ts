import { ErrorApp } from '../../../../shared/Errors/Errors';
import { IClientRepository, Client, UserRepository } from '../../Repositories/ClientRepository';
import { v4 as uuidv4 } from 'uuid';

interface IClientCreate {
  Phone: string
  Email: string
  Name: string
  Birthday: string
  Password: string
}

export class CreateClient {

  protected RepositoryStrategy: IClientRepository;

  constructor(RepositoryStrategy: IClientRepository = new UserRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(ClientProps: IClientCreate): Promise<Client | ErrorApp> {

    const ClientStorage = await this.RepositoryStrategy.create({
      id: uuidv4(),
      ...ClientProps
    });

    if (!ClientStorage) {
      return new ErrorApp('Client not persist into storage');
    }

    return ClientStorage;
  }

}