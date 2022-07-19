import { ErrorApp, Errors } from '../../../../shared/Errors/Errors';
import { UserRepository, IUserRepository, User } from '../../Repositories/UserRepository';

interface IUserUpdate {
  id: string
  Name: string
  Birthday: string
  Cpf_cnpj: string
  Phone: string
  Email: string
  Password: string
  idUserPermission: number
}

export class UpdateUser {

  protected RepositoryStrategy: IUserRepository;

  constructor(RepositoryStrategy: IUserRepository = new UserRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async update(userProps: IUserUpdate): Promise<User | ErrorApp> {

    const user: User = {
      ...userProps
    }

    const UserStorage = await this.RepositoryStrategy.orm.user.update({
      where: {
        id: user.id
      },
      data: {
        Cpf_cnpj: user.Cpf_cnpj,
        Name: user.Name,
        Birthday: user.Birthday,
        Password: user.Password,
        Phone: user.Phone,
        Email: user.Email
      }
    });

    if (!UserStorage || UserStorage instanceof ErrorApp) {
      return new ErrorApp('User-UPDATE-' + Errors.services.persist.message, Errors.services.persist.code);
    }

    return user;
  }

}