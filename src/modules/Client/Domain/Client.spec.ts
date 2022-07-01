import { IClient, client as Client } from './Client';
import { ErrorApp } from '../../../shared/Errors/Errors';

describe('Business', () => {
  it('should be create a Client', () => {

    const ClientProps: IClient = {
      id: '123456789',
      Phone: '123456789',
      Email: 'client@gmail.com',
      Name: 'Teste Client',
      Birthday: '123',
      Password: '123'
    }

    const client = Client.create(ClientProps);

    if (client instanceof ErrorApp) {
      throw new Error('Client not created--------ERROR');
    }

    expect(client.id).toEqual('123456789');
    expect(client.Phone).toEqual('123456789');
    expect(client.Email).toEqual('client@gmail.com');
    expect(client.Name).toEqual('Teste Client');
    expect(client.Birthday).toEqual('123');
    expect(client.Password).toEqual('123');
  });

})