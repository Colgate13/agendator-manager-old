import { ErrorApp } from '../../../shared/Errors/Errors';
import { UserRepository, IUserRepository, User } from '../Repositories/UserRepository';

export class CreateUser {

  protected RepositoryStrategy: IUserRepository;

  constructor(RepositoryStrategy: IUserRepository = new UserRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(userProps: User): Promise<User> {

    const UserStorage = await this.RepositoryStrategy.create(userProps);

    if (!UserStorage) {
      throw new Error('User not created into storage');
    }

    return userProps;
  }

}