import { CreateService } from './CreateService';

describe('Create a Service with service', () => {
  const createService = new CreateService();

  const mocks = {
    RepositoryStrategy: {
      create: ((data: any) => {
        return {
          id: data.id,
          idBusiness: data.idBusiness,
          idUser: data.idUser,
          agendaId: data.agendaId,
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
      idBusiness: '1233456789',
      idUser: '1233456789',
      agendaId: '1233456789',
      Description: 'Cabelo e Barba',
      DurationTime: '20:00',
      Price: '20',
    }]);

    expect(creatingService.id).toBe('1233456789');
    expect(creatingService.idBusiness).toBe('1233456789');
    expect(creatingService.idUser).toBe('1233456789');
    expect(creatingService.agendaId).toBe('1233456789');
    expect(creatingService.Description).toBe('Cabelo e Barba');
    expect(creatingService.DurationTime).toBe('20:00');
    expect(creatingService.Price).toBe('20');

  });
})