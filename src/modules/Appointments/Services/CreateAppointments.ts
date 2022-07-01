import { ErrorApp } from '../../../shared/Errors/Errors';
import { Appointments, AppointmentsRepository, IAppointmentsRepository } from '../Repositories/AppointmentsRepository';

interface ICreateAppointments {
  id: string;
  idClient: string;
  idService: string;
  Year: number;
  Day: number;
  Month: number;
  Hour: string;
}

export class CreateAppointments {

  protected RepositoryStrategy: IAppointmentsRepository;

  constructor(RepositoryStrategy: IAppointmentsRepository = new AppointmentsRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(AppointmentsProps: ICreateAppointments): Promise<Appointments> {

    const Service = await this.RepositoryStrategy.orm.service.findUnique({
      where: {
        id: AppointmentsProps.idService
      }
    })
    
    if (!Service) {
      throw new Error('Service');
    }

    const AppoitmentsDatabase = await this.RepositoryStrategy.findAppointments({
      ...AppointmentsProps,
      Service: {
        ...Service
      }
    })

    if (!AppoitmentsDatabase) {
      throw new Error('AppoitmentsDatabase');
    }
    
    const HourTime = Number(AppointmentsProps.Hour.split(':')[0]);
    const MinutesTime = Number(AppointmentsProps.Hour.split(':')[1]);
    
    const HourTimeDuration = Number(Service.DurationTime.split(':')[0]);
    const MinutesTimeDuration = Number(Service.DurationTime.split(':')[1]);
    
    const StartimeHour = new Date(AppointmentsProps.Year, AppointmentsProps.Month - 1, AppointmentsProps.Day, HourTime, MinutesTime, 0, 0);
    const EndTimeHour = new Date(AppointmentsProps.Year, AppointmentsProps.Month - 1, AppointmentsProps.Day, (HourTime + HourTimeDuration), (MinutesTime + MinutesTimeDuration), 0, 0);
    
    AppoitmentsDatabase.forEach((AppoitmentDatabase) => {

      if (AppoitmentDatabase.Day === AppointmentsProps.Day && AppoitmentDatabase.Month === AppointmentsProps.Month && AppoitmentDatabase.Year === AppointmentsProps.Year) {

        if (
          (
            new Date(AppoitmentDatabase.Startime) >= StartimeHour
            && new Date(AppoitmentDatabase.Startime) < EndTimeHour
          )

          ||

          (
            new Date(AppoitmentDatabase.Startime) <= StartimeHour
            && new Date(AppoitmentDatabase.EndTime) > StartimeHour
          )
        ) {

          throw new ErrorApp('Conflito de horario agendamento. Appointment não agendado');
        
        }
      }
    });


    const appointment: Appointments = {
      ...AppointmentsProps,
      Startime: String(StartimeHour),
      EndTime: String(EndTimeHour),
      Status: 1
    }
    
    const AppointmentsStorage = await this.RepositoryStrategy.create(appointment);

    if (!AppointmentsStorage) {
      throw new Error('Appointments not created into storage');
    }

    return appointment;
  }

}