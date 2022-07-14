import { ErrorApp } from '../../../../shared/Errors/Errors';
import { AppointmentsRepository, IAppointmentsRepository } from '../../Repositories/AppointmentsRepository';
import { AppointmentsAbstract } from '../../Domain/AppointmentsAbstract';
import { IListAppointment } from './IListAppointments';

export class ListAppointments {
  RepositoryStrategy: IAppointmentsRepository;

  constructor(RepositoryStrategy: IAppointmentsRepository = new AppointmentsRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async listAppointments(SearchProps: IListAppointment): Promise<AppointmentsAbstract[] | ErrorApp> {

    switch (true) {
      case !!SearchProps.id:
        return this.ListAppointById(SearchProps.id || null);

      case !!SearchProps.idUser:
        return this.ListAppointByUser(SearchProps.idUser || null);

      case !!SearchProps.idService:
        return this.ListAppointByService(SearchProps.idService || null);

      case !!SearchProps.idClient:
        return this.ListAppointByClient(SearchProps.idClient || null);

      case !!SearchProps.interval:
      case !!SearchProps.interval.Day:
      case !!SearchProps.interval.Month:
      case !!SearchProps.interval.Year:
        return this.ListAppointByInterval(SearchProps.interval.Day, SearchProps.interval.Month, SearchProps.interval.Year);

      default:
        return new ErrorApp('Parameters informed do not sufficient to list appointments');
    }
  }

  async ListAppointById(id: string | null): Promise<AppointmentsAbstract[] | ErrorApp> {
    if (!id) {
      return new ErrorApp('Parameters informed do not sufficient to list appointments by id');
    }

    const AppointmentsList: AppointmentsAbstract[] = await this.RepositoryStrategy.orm.appointments.findMany({
      where: {
        id: id
      }
    })

    return AppointmentsList;
  }

  async ListAppointByUser(idUser: string | null): Promise<AppointmentsAbstract[] | ErrorApp> {
    if (!idUser) {
      return new ErrorApp('Parameters informed do not sufficient to list appointments by idUser');
    }

    const AppointmentsList: AppointmentsAbstract[] = await this.RepositoryStrategy.orm.appointments.findMany({
      where: {
        Service: {
          idUser: idUser
        }
      }
    })

    return AppointmentsList;
  }

  async ListAppointByService(idService: string | null): Promise<AppointmentsAbstract[] | ErrorApp> {
    if (!idService) {
      return new ErrorApp('Parameters informed do not sufficient to list appointments by idService');
    }

    const AppointmentsList: AppointmentsAbstract[] = await this.RepositoryStrategy.orm.appointments.findMany({
      where: {
        Service: {
          id: idService
        }
      }
    })

    return AppointmentsList;
  }

  async ListAppointByClient(idClient: string | null): Promise<AppointmentsAbstract[] | ErrorApp> {
    if (!idClient) {
      return new ErrorApp('Parameters informed do not sufficient to list appointments by idClient');
    }

    const AppointmentsList: AppointmentsAbstract[] = await this.RepositoryStrategy.orm.appointments.findMany({
      where: {
        Client: {
          id: idClient
        }
      }
    })

    return AppointmentsList;
  }

  async ListAppointByInterval(Year: number, Day: number, Month: number): Promise<AppointmentsAbstract[] | ErrorApp> {
    if (!Year || !Day || !Month) {
      return new ErrorApp('Parameters informed do not sufficient to list appointments by Interval');
    }

    const AppointmentsList: AppointmentsAbstract[] = await this.RepositoryStrategy.orm.appointments.findMany({
      where: {
        Day,
        Month,
        Year
      }
    })

    return AppointmentsList;
  }

}
