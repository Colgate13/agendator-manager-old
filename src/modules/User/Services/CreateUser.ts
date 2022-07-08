import { ErrorApp, Errors } from '../../../shared/Errors/Errors';
import { UserRepository, IUserRepository, User } from '../Repositories/UserRepository';
import { v4 as uuidv4 } from 'uuid';

interface IUserCreate {
  Name: string
  Birthday: string
  Cpf_cnpj: string
  Phone: string
  Email: string
  Password: string
  idUserPermission: number;
}

export class CreateUser {

  protected RepositoryStrategy: IUserRepository;

  constructor(RepositoryStrategy: IUserRepository = new UserRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(userProps: IUserCreate): Promise<User | ErrorApp> {

    const user: User = {
      id: uuidv4(),
      ...userProps
    }

    const UserStorage = await this.RepositoryStrategy.create(user);

    if (!UserStorage || UserStorage instanceof ErrorApp) {
      console.log("Oi")
      return new ErrorApp('User-' + Errors.services.persist.message, Errors.services.persist.code);
    }

    return user;
  }

}