import { ErrorApp } from '../../../../shared/Errors/Errors';
import { ListAppointments } from './ListAppointments';

describe('Test List Appointments', () => {

  const appointments = [
    {
      id: '49559231-8b89-4d41-bcb0-1421ebf96531',
      idClient: 'c2e1160e-6bca-4a18-9291-94d04f243160',
      idService: 'c8fd6b87-fab0-4418-97ea-3deff0baa63b',
      Year: 2022,
      Day: 1,
      Month: 1,
      Hour: '08:00',
      Status: 1,
      Startime: 'Sat Jan 01 2022 08:00:00 GMT-0300 (Brasilia Standard Time)',
      EndTime: 'Sat Jan 01 2022 10:00:00 GMT-0300 (Brasilia Standard Time)'
    },
    {
      id: '5411c2f1-83a0-4978-83e3-df362d15c625',
      idClient: 'c2e1160e-6bca-4a18-9291-94d04f243160',
      idService: 'c8fd6b87-fab0-4418-97ea-3deff0baa63b',
      Year: 2022,
      Day: 1,
      Month: 1,
      Hour: '08:00',
      Status: 1,
      Startime: 'Sat Jan 01 2022 10:00:00 GMT-0300 (Brasilia Standard Time)',
      EndTime: 'Sat Jan 01 2022 12:00:00 GMT-0300 (Brasilia Standard Time)'
    }
  ]

  const ListMocks = {
    RepositoryStrategy: {
      orm: {
        appointments: {
          findMany(data: any) {
            return appointments;
          }
        }
      }
    }
  }

  const switchMock = {
    ListAppointById() {
      return appointments;
    },
    ListAppointByUser() {
      return appointments;
    },
    ListAppointByService() {
      return appointments;
    },
    ListAppointByClient() {
      return appointments;
    }
  }

  const listAppointments = new ListAppointments()

  it('list all appointment using switch method', async () => {
    const listById = await listAppointments.listAppointments.apply(switchMock, [{
      id: '123'
    }])

    const listByIdUser = await listAppointments.listAppointments.apply(switchMock, [{
      idUser: '123'
    }])

    const listByIdService = await listAppointments.listAppointments.apply(switchMock, [{
      idService: '123'
    }])

    const listByIdClient = await listAppointments.listAppointments.apply(switchMock, [{
      idClient: '123'
    }])

    expect(listById).toBe(appointments);
    expect(listByIdUser).toBe(appointments);
    expect(listByIdService).toBe(appointments);
    expect(listByIdClient).toBe(appointments);

  })

  it('List all appointments by id', async () => {

    const list = await listAppointments.ListAppointById.apply(ListMocks, ['123'])

    try {
      await listAppointments.ListAppointById.apply(ListMocks, [null])
    } catch (error) {
      expect(error).toBeInstanceOf(ErrorApp);
    }

    expect(list).toBe(appointments);

  })

  it('List all appointments ByUser', async () => {

    const list = await listAppointments.ListAppointByUser.apply(ListMocks, ['123'])

    try {
      await listAppointments.ListAppointByUser.apply(ListMocks, [null])
    } catch (error) {
      expect(error).toBeInstanceOf(ErrorApp);
    }

    expect(list).toBe(appointments);

  })

  it('List all appointments ByService', async () => {

    const list = await listAppointments.ListAppointByService.apply(ListMocks, ['123'])

    try {
      await listAppointments.ListAppointByService.apply(ListMocks, [null])
    } catch (error) {
      expect(error).toBeInstanceOf(ErrorApp);
    }

    expect(list).toBe(appointments);

  })

  it('List all appointments ByClient', async () => {

    const list = await listAppointments.ListAppointByClient.apply(ListMocks, ['123'])

    try {
      await listAppointments.ListAppointByClient.apply(ListMocks, [null])
    } catch (error) {
      expect(error).toBeInstanceOf(ErrorApp);
    }

    expect(list).toBe(appointments);

  })

})