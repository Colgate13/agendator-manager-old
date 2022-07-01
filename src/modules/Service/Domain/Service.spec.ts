import { service, IService } from './Service';
import { ErrorApp } from '../../../shared/Errors/Errors';

describe('Client', () => {
  it('should be create a Client', () => {

    const ClientProps: IService = {
      id: '123456789',
      idUser: '123456789',
      Description: 'Client',
      DurationTime: 20,
      Price: 20
    }

    const Client = service.create(ClientProps);

    if (Client instanceof ErrorApp) {
      throw new Error('Client not created -------- ERROR');
    }

    expect(Client.id).toEqual('123456789');
    expect(Client.idUser).toEqual('123456789');
    expect(Client.Description).toEqual('Client');
    expect(Client.DurationTime).toEqual(20);
    expect(Client.Price).toEqual(20);
  });

  it('should be not create a Client id invalid', () => {

    const ClientProps: IService = {
      id: '12',
      idUser: '123456789',
      Description: 'Client',
      DurationTime: 0,
      Price: 20
    }

    try {
      service.create(ClientProps);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
})