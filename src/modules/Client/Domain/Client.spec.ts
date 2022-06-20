import { IClient, client } from './Client';
import { ErrorApp } from '../../../shared/Errors/Errors';

describe('Business', () => {
  it('should be create a Client', () => {

    const ClientProps: IClient = {
      id: '123456789',
      idBusiness: '123456789',
      Phone: '123456789',
      Email: 'client@gmail.com',
      Name: 'Teste Client',
      Birthday: '123',
      Address: '123',
      Password: '123',
      CheckMail: false,
      Balance: '0'
    }

    const business = client.create(ClientProps);

    if (business instanceof ErrorApp) {
      throw new Error('Client not created--------ERROR');
    }

    expect(business.id).toEqual('123456789');
    expect(business.idBusiness).toEqual('123456789');
    expect(business.Phone).toEqual('123456789');
    expect(business.Email).toEqual('client@gmail.com');
    expect(business.Name).toEqual('Teste Client');
    expect(business.Birthday).toEqual('123');
    expect(business.Address).toEqual('123');
    expect(business.Password).toEqual('123');
    expect(business.CheckMail).toEqual(false);
    expect(business.Balance).toEqual('0');
  });

})