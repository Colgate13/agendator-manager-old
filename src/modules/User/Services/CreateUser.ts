import { ErrorApp } from '../../../shared/Errors/Errors';
import { user } from '../Domain/User';
import { UserRepository, IUserRepository, User } from '../Repositories/UserRepository';
import { IUser } from '../Interface/Domain';

export class CreateUser {

  protected RepositoryStrategy: IUserRepository;

  constructor(RepositoryStrategy: IUserRepository = new UserRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(userProps: IUser): Promise<User> {

    const User = user.create(userProps);

    if (User instanceof ErrorApp) {
      throw new Error('User not created, invalid props');
    }

    const UserStorage = await this.RepositoryStrategy.create(User);

    if (!UserStorage) {
      throw new Error('User not created into storage');
    }

    return User;
  }

}