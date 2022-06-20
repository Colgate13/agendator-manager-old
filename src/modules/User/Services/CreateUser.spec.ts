import { CreateUser } from './CreateUser';

describe('Create a Business with service', () => {
  const userCreate = new CreateUser();

  const mocks = {
    RepositoryStrategy: {
      create: ((data: any) => {
        return {
          id: data.id,
          idBusiness: data.idBusiness,
          idUserPermission: data.idUserPermission,
          Name: data.Name,
          Phone: data.Phone,
          Email: data.Email,
          Password: data.Password
        };
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

  it('should create a user with service', async () => {

    const creatingUser = await userCreate.create.apply(mocks, [{
      id: '123456789',
      idBusiness: '123456789',
      idUserPermission: 1,
      Name: 'Teste User',
      Birthday: '123456789',
      Cpf_cnpj: '450.870.500-69',
      Phone: '123456789',
      Email: 'user@gmail.com',
      Password: '123456789'
    }]);

    expect(creatingUser.id).toBe('123456789');

  });

  it('should not create a business with service because id invalid', async () => {


    try {
      await userCreate.create.apply(mocks, [{
        id: '12',
        idBusiness: '123456789',
        idUserPermission: 1,
        Name: 'Teste User',
        Birthday: '123456789',
        Cpf_cnpj: '450.870.500-69',
        Phone: '123456789',
        Email: 'user@gmail.com',
        Password: '123456789'
      }]);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }

  });

  it('should not create a business with service because db dont create', async () => {


    try {
      await userCreate.create.apply(mocks2, [{
        id: '123456789',
        idBusiness: '123456789',
        idUserPermission: 1,
        Name: 'Teste User',
        Birthday: '123456789',
        Cpf_cnpj: '450.870.500-69',
        Phone: '123456789',
        Email: 'user@gmail.com',
        Password: '123456789'
      }]);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }

  });
})