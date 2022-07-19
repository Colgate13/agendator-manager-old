import { ErrorApp } from '../../../../shared/Errors/Errors';
import { IClientRepository, Client, UserRepository } from '../../Repositories/ClientRepository';

export class UpdateClient {

  protected RepositoryStrategy: IClientRepository;

  constructor(RepositoryStrategy: IClientRepository = new UserRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async update(ClientProps: Client): Promise<Client | ErrorApp> {

    const ClientStorage = await this.RepositoryStrategy.orm.client.update({
      where: {
        id: ClientProps.id
      },
      data: {
        Birthday: ClientProps.Birthday,
        Email: ClientProps.Email,
        Name: ClientProps.Name,
        Password: ClientProps.Password,
        Phone: ClientProps.Phone
      }
    });

    if (!ClientStorage) {
      return new ErrorApp('Client not persist update into storage');
    }

    return ClientStorage;
  }

}