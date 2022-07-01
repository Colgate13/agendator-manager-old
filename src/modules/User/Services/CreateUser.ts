import { ErrorApp } from '../../../shared/Errors/Errors';
import { UserRepository, IUserRepository, User } from '../Repositories/UserRepository';
import { v4 as uuidv4 } from 'uuid';

interface IUserCreate  {
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

  async create(userProps: IUserCreate): Promise<User> {

    const user: User = {
      id: uuidv4(),
      ...userProps
    }

    const UserStorage = await this.RepositoryStrategy.create(user).catch((Error: any) => {
      console.log(Error)
    });

    if (!UserStorage) {
      throw new Error('User not created into storage');
    }

    return user;
  }

}