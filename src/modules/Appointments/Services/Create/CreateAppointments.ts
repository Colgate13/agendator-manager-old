import { ErrorApp, Errors } from '../../../../shared/Errors/Errors';
import { CreateAppointmentsServiceClass } from './ICreateAppointments';
import { AppointmentsRepository, IAppointmentsRepository } from '../../Repositories/AppointmentsRepository';
import { Appointments, IAppointmentsCreate } from '../../Domain/Appointments';

export class CreateAppointments implements CreateAppointmentsServiceClass {

  protected RepositoryStrategy: IAppointmentsRepository;

  constructor(RepositoryStrategy: IAppointmentsRepository = new AppointmentsRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(IAppointmentsCreateProps: IAppointmentsCreate): Promise<Appointments | ErrorApp> {

    const Service = await this.RepositoryStrategy.orm.service.findUnique({
      where: {
        id: IAppointmentsCreateProps.idService
      }
    })

    if (!Service) {
      return new ErrorApp('Service do not get Services');
    }

    const AppointmentsDatabase = await this.RepositoryStrategy.findAppointments({
      ...IAppointmentsCreateProps,
      Service: {
        ...Service
      }
    })

    if (!AppointmentsDatabase) {
      return new ErrorApp('Appointments not found data');
    }

    IAppointmentsCreateProps.Status = 1;
    const appointments = new Appointments(IAppointmentsCreateProps, {
      HourDuration: Number(Service.DurationTime.split(':')[0]),
      MinutesDuration: Number(Service.DurationTime.split(':')[1])
    })

    let conflictedTime = false;
    AppointmentsDatabase.forEach((AppointmentsDatabase) => {

      if (
        AppointmentsDatabase.Day === IAppointmentsCreateProps.Day
        && AppointmentsDatabase.Month === IAppointmentsCreateProps.Month
        && AppointmentsDatabase.Year === IAppointmentsCreateProps.Year
      ) {

        if (
          (
            new Date(AppointmentsDatabase.StartTime) >= new Date(appointments.StartTime)
            && new Date(AppointmentsDatabase.StartTime) < new Date(appointments.EndTime)
          )

          ||

          (
            new Date(AppointmentsDatabase.StartTime) <= new Date(appointments.StartTime)
            && new Date(AppointmentsDatabase.EndTime) > new Date(appointments.EndTime)
          )

          ||

          (
            AppointmentsDatabase.StartTime === appointments.StartTime
            && AppointmentsDatabase.EndTime === appointments.EndTime
          )
        ) {
          conflictedTime = true;
        }
      }
    });

    if (conflictedTime)
      return new ErrorApp('Appointments conflicted. Not persist new appointment');

    const AppointmentsStorage = await this.RepositoryStrategy.create(appointments);

    if (!AppointmentsStorage) {
      return new ErrorApp('Appointments' + Errors.services.persist.message, Errors.services.persist.code);
    }

    return appointments;
  }

}
