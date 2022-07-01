import { ErrorApp } from '../../../shared/Errors/Errors';
import { IUser } from '../Interfaces/Domain';
export { IUser } from '../Interfaces/Domain';

export class user {

  public id: string;
  public idUserPermission: number;
  public Name: string;
  public Birthday: string;
  public Cpf_cnpj: string;
  public Phone: string;
  public Email: string;
  public Password: string;

  private constructor(UserProps: IUser) {
    this.id = UserProps.id;
    this.idUserPermission = UserProps.idUserPermission;
    this.Name = UserProps.Name;
    this.Birthday = UserProps.Birthday;
    this.Cpf_cnpj = UserProps.Cpf_cnpj;
    this.Phone = UserProps.Phone;
    this.Email = UserProps.Email;
    this.Password = UserProps.Password;
  }

  public static create(UserProps: IUser): user | ErrorApp {

    if (UserProps.id.length <= 5) {
      return new ErrorApp('User id is required', 1);
    }

    return new user(UserProps);
  }
}
