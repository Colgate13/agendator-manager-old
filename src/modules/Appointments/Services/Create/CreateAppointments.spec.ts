import { ErrorApp } from '../../../shared/Errors/Errors';
import { CreateAppointments } from './CreateAppointments';

describe('Create a Appointments with service', () => {
  const createAppointments = new CreateAppointments();

  const mocks = {
    RepositoryStrategy: {
      findAppointments(data: any) {
        return [
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
      },
      create: ((data: any) => {
        return {
          id: data.id,
          idClient: data.idClient,
          idService: data.serviceId,
          Day: data.Day,
          Month: data.Month,
          Year: data.Year,
          Hour: data.Hour,
          Startime: data.Startime,
          EndTime: data.EndTime,
          Status: data.EndTime
        }
      }),
      orm: {
        appointments: {
          findMany: (data: any) => {
            return [
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
          }
        },
        service: {
          findUnique(data: any) {
            return {
              id: "1233456789",
              idUser: "1",
              Description: "string",
              DurationTime: "02:00",
              Price: 100.0
            }
          }
        }
      }
    }
  }

  it('should create a Appointments with service', async () => {

    const creatingAppointmentsAfter = await createAppointments.create.apply(mocks, [{
      id: '1233456789',
      idService: '1233456789',
      idClient: '1233456789',
      Day: 1,
      Month: 1,
      Year: 2022,
      Hour: '14:00'
    }]);

    const creatingAppointmentsBefore = await createAppointments.create.apply(mocks, [{
      id: '1233456789',
      idService: '1233456789',
      idClient: '1233456789',
      Day: 1,
      Month: 1,
      Year: 2022,
      Hour: '01:59'
    }])

    if (creatingAppointmentsAfter instanceof ErrorApp || creatingAppointmentsBefore instanceof ErrorApp) {
      throw new Error("oi");
    }

    expect(creatingAppointmentsAfter.id).toBe('1233456789');
    expect(creatingAppointmentsAfter.idClient).toBe('1233456789');
    expect(creatingAppointmentsAfter.idService).toBe('1233456789');

    expect(creatingAppointmentsBefore.id).toBe('1233456789');
    expect(creatingAppointmentsBefore.idClient).toBe('1233456789');
    expect(creatingAppointmentsBefore.idService).toBe('1233456789');
  });

  it('should not create a Appointments with service because Conflit of times', async () => {

    try {
      await createAppointments.create.apply(mocks, [{
        id: '1233456789',
        idService: '1233456789',
        idClient: '1233456789',
        Day: 1,
        Month: 1,
        Year: 2022,
        Hour: '11:59'
      }])
    } catch (error) {
      expect(error).toBeInstanceOf(ErrorApp);
    }

  });
})