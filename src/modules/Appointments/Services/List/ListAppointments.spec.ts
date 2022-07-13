import { ErrorApp } from '../../../../shared/Errors/Errors';
import { ListAppointments } from './ListAppointments';

describe('Create a Appointments with service', () => {

  const repositoryMock = {
    RepositoryStrategy: {
      orm: {
        appointments: {
          findMany: (data: any) => {
            const database = [
              {
                id: '49d59231-8b89-4d41-123-1421ebf96531',
                idClient: 'c2e1160e-6bca-4a18-9291-94d04f243160',
                idService: '123-fab0-4418-97ea-3deff0baa63b',
                Year: 2022,
                Day: 1,
                Month: 1,
                Hour: '08:40',
                Status: 1,
                StartTime: 'Sat Jan 01 2022 08:00:00 GMT-0300 (Brasilia Standard Time)',
                EndTime: 'Sat Jan 01 2022 10:00:00 GMT-0300 (Brasilia Standard Time)'
              },
              {
                id: '49559231-8b89-4d41-bcb0-1421ebf96531',
                idClient: 'c2e1160e-6bca-4a18-9291-94d04f243160',
                idService: '312-fab0-4418-97ea-3deff0baa63b',
                Year: 2022,
                Day: 1,
                Month: 1,
                Hour: '08:30',
                Status: 1,
                StartTime: 'Sat Jan 01 2022 08:00:00 GMT-0300 (Brasilia Standard Time)',
                EndTime: 'Sat Jan 01 2022 10:00:00 GMT-0300 (Brasilia Standard Time)'
              },
              {
                id: '495592cc-8b89-4d41-bcb0-333333',
                idClient: 'c2e1160e-6bca-4a18-9291-94d04f243160',
                idService: '31233-fab0-4418-97ea-3deff0baa63b',
                Year: 2022,
                Day: 1,
                Month: 1,
                Hour: '08:01',
                Status: 1,
                StartTime: 'Sat Jan 01 2022 08:00:00 GMT-0300 (Brasilia Standard Time)',
                EndTime: 'Sat Jan 01 2022 10:00:00 GMT-0300 (Brasilia Standard Time)'
              },
              {
                id: '495592dd-8b89-4d41-bcb0-1421ebf96531',
                idClient: 'c2e1160e-6bca-4a18-9291-94d04f243160',
                idService: '33333-fab0-4418-97ea-3deff0baa63b',
                Year: 2022,
                Day: 1,
                Month: 1,
                Hour: '08:12',
                Status: 1,
                StartTime: 'Sat Jan 01 2022 08:00:00 GMT-0300 (Brasilia Standard Time)',
                EndTime: 'Sat Jan 01 2022 10:00:00 GMT-0300 (Brasilia Standard Time)'
              },
              {
                id: '5411c2f1-83a0-4978-83e3-df362d15c625',
                idClient: 'c2e1160e-6bca-4a18-9291-94d04f243160',
                idService: 'c8fd6b87-fab0-4418-97ea-3deff0baa63b',
                Year: 2022,
                Day: 1,
                Month: 1,
                Hour: '18:00',
                Status: 2,
                StartTime: 'Sat Jan 01 2022 10:00:00 GMT-0300 (Brasilia Standard Time)',
                EndTime: 'Sat Jan 01 2022 12:00:00 GMT-0300 (Brasilia Standard Time)'
              }
            ]

            const dabaseBaseService = [
              {
                id: 'c8fd6b87-fab0-4418-97ea-3deff0baa63b',
                idUser: '1233456789',
                Description: 'Cabelo e Barba',
                DurationTime: "02:00",
                Price: 20,
              },
              {
                id: '123123-fab0-4418-97ea-3deff0baa63b',
                idUser: '123133113',
                Description: 'Cabelo e Barba',
                DurationTime: "02:00",
                Price: 20,
              },
            ]

            return database.filter((appointment) => {
              const service = dabaseBaseService.filter(
                (service) => service.idUser == data.where.Service.idUser
              )

            })
          }
        }
      }
    }
  }

  it("List all appointments into Mock repository", async () => {

    const listAppointments = new ListAppointments();

    const list = await listAppointments.ListAppointByUser.apply(repositoryMock, ['1233456789'])

    if (list instanceof ErrorApp) {
      throw new Error('Instance of errorApp into test');
    }
  })
});
