import { CreateService } from './CreateService';

describe('Create a Service with service', () => {
  const createService = new CreateService();

  const mocks = {
    RepositoryStrategy: {
      create: ((data: any) => {
        return {
          id: data.id,
          idUser: data.idUser,
          Description: data.Description,
          DurationTime: data.DurationTime,
          Price: data.Price,
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

  it('should create a Service with service', async () => {

    const creatingService = await createService.create.apply(mocks, [{
      id: '1233456789',
      idUser: '1233456789',
      Description: 'Cabelo e Barba',
      DurationTime: 20,
      Price: 20,
    }]);

    expect(creatingService.id).toBe('1233456789');
    expect(creatingService.idUser).toBe('1233456789');
    expect(creatingService.Description).toBe('Cabelo e Barba');
    expect(creatingService.DurationTime).toBe(20);
    expect(creatingService.Price).toBe(20);

  });
})