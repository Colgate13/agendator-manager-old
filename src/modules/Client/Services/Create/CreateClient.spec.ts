import { ErrorApp } from '../../../../shared/Errors/Errors';
import { CreateClient } from './CreateClient';

describe('Create a Client with service', () => {
  const createClient = new CreateClient();

  const mocks = {
    RepositoryStrategy: {
      create: ((data: any) => {
        return {
          id: data.id,
          Phone: data.Phone,
          Email: data.Email,
          Name: data.Name,
          Birthday: data.Birthday,
          Password: data.Password
        }
      })
    }
  }

  const mocksBroken = {
    RepositoryStrategy: {
      create: ((data: any) => {
        return null
      })
    }
  }

  it('should create a Client with service', async () => {

    const creatingService = await createClient.create.apply(mocks, [{
      Phone: '123456789',
      Email: 'client@gmail.com',
      Name: 'Teste Client',
      Birthday: '123',
      Password: '123'
    }]);

    if (creatingService instanceof ErrorApp) {
      throw new Error();
    }

    expect(creatingService.Phone).toBe('123456789');

  });

  it('should a not create a Client with service', async () => {

    try {
      await createClient.create.apply(mocksBroken, [{
        Phone: '123456789',
        Email: 'client@gmail.com',
        Name: 'Teste Client',
        Birthday: '123',
        Password: '123'
      }])
    } catch (error) {
      expect(error).toBeInstanceOf(ErrorApp);
    }

  });
})