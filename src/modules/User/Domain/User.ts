import { ErrorApp } from '../../../shared/Errors/Errors';
import { IUser } from '../Interfaces/Domain';
export { IUser } from '../Interfaces/Domain';

export class user {

  protected _id: string;
  protected _idBusiness: string;
  protected _idUserPermission: number;
  protected _Name: string;
  protected _Birthday: string;
  protected _Cpf_cnpj: string;
  protected _Phone: string;
  protected _Email: string;
  protected _Password: string;

  private constructor(UserProps: IUser) {
    this._id = UserProps.id;
    this._idBusiness = UserProps.idBusiness;
    this._idUserPermission = UserProps.idUserPermission;
    this._Name = UserProps.Name;
    this._Birthday = UserProps.Birthday;
    this._Cpf_cnpj = UserProps.Cpf_cnpj;
    this._Phone = UserProps.Phone;
    this._Email = UserProps.Email;
    this._Password = UserProps.Password;
  }

  public static create(UserProps: IUser): user | ErrorApp {

    if (UserProps.id.length <= 5) {
      return new ErrorApp('User id is required', 1);
    }

    return new user(UserProps);
  }

  get id(): string {
    return this._id;
  }

  get idBusiness(): string {
    return this._idBusiness;
  }

  get idUserPermission(): number {
    return this._idUserPermission;
  }

  get Name(): string {
    return this._Name;
  }

  get Birthday(): string {
    return this._Birthday;
  }

  get Cpf_cnpj(): string {
    return this._Cpf_cnpj;
  }

  get Phone(): string {
    return this._Phone;
  }

  get Email(): string {
    return this._Email;
  }

  get Password(): string {
    return this._Password;
  }
}
