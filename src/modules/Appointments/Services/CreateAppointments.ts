import { ErrorApp, Errors } from '../../../shared/Errors/Errors';
import { CreateAppointmentsServiceClass, ICreateAppointmentsProps } from './ICreateAppointments';
import { Appointments, AppointmentsRepository, IAppointmentsRepository } from '../Repositories/AppointmentsRepository';


export class CreateAppointments implements CreateAppointmentsServiceClass {

  protected RepositoryStrategy: IAppointmentsRepository;

  constructor(RepositoryStrategy: IAppointmentsRepository = new AppointmentsRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(AppointmentsProps: ICreateAppointmentsProps): Promise<Appointments | ErrorApp> {

    const Service = await this.RepositoryStrategy.orm.service.findUnique({
      where: {
        id: AppointmentsProps.idService
      }
    })

    if (!Service) {
      return new ErrorApp('CreateAppointment do not get Services');
    }

    const AppointmentsDatabase = await this.RepositoryStrategy.findAppointments({
      ...AppointmentsProps,
      Service: {
        ...Service
      }
    })

    if (!AppointmentsDatabase) {
      return new ErrorApp('Appointments not found data');
    }

    const HourTime = Number(AppointmentsProps.Hour.split(':')[0]);
    const MinutesTime = Number(AppointmentsProps.Hour.split(':')[1]);

    const HourTimeDuration = Number(Service.DurationTime.split(':')[0]);
    const MinutesTimeDuration = Number(Service.DurationTime.split(':')[1]);

    const startTimeHour = new Date(AppointmentsProps.Year, AppointmentsProps.Month - 1, AppointmentsProps.Day, HourTime, MinutesTime, 0, 0);
    const EndTimeHour = new Date(AppointmentsProps.Year, AppointmentsProps.Month - 1, AppointmentsProps.Day, (HourTime + HourTimeDuration), (MinutesTime + MinutesTimeDuration), 0, 0);

    AppointmentsDatabase.forEach((AppointmentsDatabase) => {

      if (
        AppointmentsDatabase.Day === AppointmentsProps.Day
        && AppointmentsDatabase.Month === AppointmentsProps.Month
        && AppointmentsDatabase.Year === AppointmentsProps.Year
      ) {

        if (
          (
            new Date(AppointmentsDatabase.StartTime) >= startTimeHour
            && new Date(AppointmentsDatabase.StartTime) < EndTimeHour
          )

          ||

          (
            new Date(AppointmentsDatabase.StartTime) <= startTimeHour
            && new Date(AppointmentsDatabase.EndTime) > startTimeHour
          )
        ) {

          return new ErrorApp('Appointments conflicted. Not persist new appointment');
        }
      }
    });


    const appointment: Appointments = {
      ...AppointmentsProps,
      StartTime: String(startTimeHour),
      EndTime: String(EndTimeHour),
      Status: 1
    }

    const AppointmentsStorage = await this.RepositoryStrategy.create(appointment);

    if (!AppointmentsStorage) {
      return new ErrorApp('Appointments' + Errors.services.persist.message, Errors.services.persist.code);
    }

    return appointment;
  }

}
