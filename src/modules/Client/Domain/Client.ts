import { IClient } from '../Interfaces/Domain/index';
export { IClient } from '../Interfaces/Domain/index';
import { ErrorApp } from '../../../shared/Errors/Errors';

export class client {
  public id: string
  public Phone: string
  public Email: string
  public Name: string
  public Birthday: string
  public Password: string

  private constructor(ClientProps: IClient) {
    this.id = ClientProps.id;
    this.Phone = ClientProps.Phone;
    this.Email = ClientProps.Email;
    this.Name = ClientProps.Name;
    this.Birthday = ClientProps.Birthday;
    this.Password = ClientProps.Password;
  }

  public static create(ClientProps: IClient): client | ErrorApp {

    if (ClientProps.id.length <= 5)
      return new ErrorApp('Client id is required', 1);

    return new client(ClientProps);

  }
}