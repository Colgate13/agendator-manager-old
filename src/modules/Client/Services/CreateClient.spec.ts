import { ErrorApp } from '../../../shared/Errors/Errors';
import { CreateClient } from './CreateClient';

describe('Create a Business with service', () => {
  const createBusiness = new CreateClient();

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

  const mocks2 = {
    RepositoryStrategy: {
      create: ((data: any) => {
        return null
      })
    }
  }

  it('should create a Client with service', async () => {

    const creatingBusiness = await createBusiness.create.apply(mocks, [{
      id: '123456789',
      Phone: '123456789',
      Email: 'client@gmail.com',
      Name: 'Teste Client',
      Birthday: '123',
      Password: '123'
    }]);

    if (creatingBusiness instanceof ErrorApp) {
      throw new Error();
    }

    expect(creatingBusiness.id).toBe('123456789');

  });
})