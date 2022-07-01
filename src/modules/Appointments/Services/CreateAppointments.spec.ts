import { CreateAppointments } from './CreateAppointments';

describe('Create a Appointments with service', () => {
  const createAppointments = new CreateAppointments();

  const mocks = {
    RepositoryStrategy: {
      create: ((data: any) => {
        return {
          id: data.id,
          idBusiness: data.idBusiness,
          agendaId: data.agendaId,
          idClient: data.idClient,
          serviceId: data.serviceId || "0",
          Day: data.Day,
          Month: data.Month,
          Year: data.Year,
          Hour: data.Hour,
          Confirmed: data.Confirmed,
          Refused: data.Refused
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

  it('should create a Appointments with service', async () => {

    const creatingAppointments = await createAppointments.create.apply(mocks, [{
      id: '1233456789',
      idService: '1233456789',
      idClient: '1233456789',
      Day: 1,
      Month: 1,
      Year: 2023,
      Hour: '20:00',
      Status: 0
    }]);

    expect(creatingAppointments.id).toBe('1233456789');
    expect(creatingAppointments.idClient).toBe('1233456789');
    expect(creatingAppointments.idService).toBe('1233456789');
  });
})