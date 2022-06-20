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
          Data: data.Data,
          Request: data.Request,
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
      idBusiness: '1233456789',
      agendaId: '1233456789',
      idClient: '1233456789',
      serviceId: '1233456789',
      Data: '20-10-2020 11:00 AM',
      Request: true,
    }]);

    expect(creatingAppointments.id).toBe('1233456789');
    expect(creatingAppointments.idBusiness).toBe('1233456789');
    expect(creatingAppointments.agendaId).toBe('1233456789');
    expect(creatingAppointments.idClient).toBe('1233456789');
    expect(creatingAppointments.serviceId).toBe('1233456789');
    expect(creatingAppointments.Data).toBe('20-10-2020 11:00 AM');
    expect(creatingAppointments.Request).toBe(true);
  });
})