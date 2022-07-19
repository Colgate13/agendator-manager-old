import { ErrorApp } from '../../../../shared/Errors/Errors';
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
      idUser: '1233456789',
      Description: 'Cabelo e Barba',
      DurationTime: "02:00",
      Price: 20,
    }]);

    if (creatingService instanceof ErrorApp) {
      throw new Error();
    }

    expect(creatingService.idUser).toBe('1233456789');
    expect(creatingService.Description).toBe('Cabelo e Barba');
    expect(creatingService.DurationTime).toBe("02:00");
    expect(creatingService.Price).toBe(20);

  });

  it('should a not create a Service with service', async () => {

    try {
      await createService.create.apply(mocks2, [{
        idUser: '1233456789',
        Description: 'Cabelo e Barba',
        DurationTime: "02:00",
        Price: 20,
      }]);
    } catch (error) {
      expect(error).toBeInstanceOf(ErrorApp);
    }


  });
})