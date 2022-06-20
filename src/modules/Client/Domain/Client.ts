import { IClient } from '../Interfaces/Domain/index';
export { IClient } from '../Interfaces/Domain/index';
import { ErrorApp } from '../../../shared/Errors/Errors';

export class client {
  protected _id: string
  protected _idBusiness: string
  protected _Phone: string
  protected _Email: string
  protected _Name: string
  protected _Birthday: string
  protected _Address: string
  protected _Password: string
  protected _CheckMail: boolean
  protected _Balance: string

  private constructor(ClientProps: IClient) {
    this._id = ClientProps.id;
    this._idBusiness = ClientProps.idBusiness;
    this._Phone = ClientProps.Phone;
    this._Email = ClientProps.Email;
    this._Name = ClientProps.Name;
    this._Birthday = ClientProps.Birthday;
    this._Address = ClientProps.Address;
    this._Password = ClientProps.Password;
    this._CheckMail = ClientProps.CheckMail;
    this._Balance = ClientProps.Balance;
  }


  public static create(ClientProps: IClient): client | ErrorApp {

    if (ClientProps.id.length <= 5)
      return new ErrorApp('Client id is required', 1);

    return new client(ClientProps);

  }

  get id(): string {
    return this._id;
  }

  get idBusiness(): string {
    return this._idBusiness;
  }

  get Phone(): string {
    return this._Phone;
  }

  get Email(): string {
    return this._Email;
  }

  get Name(): string {
    return this._Name;
  }

  get Birthday(): string {
    return this._Birthday;
  }

  get Address(): string {
    return this._Address;
  }

  get Password(): string {
    return this._Password;
  }

  get CheckMail(): boolean {
    return this._CheckMail;
  }

  get Balance(): string {
    return this._Balance;
  }
}