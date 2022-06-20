import { ErrorApp } from '../../../shared/Errors/Errors';
import { appointments } from '../Domain/Appointments';
import { IAppointments } from '../Interfaces/Domain';
import { Appointments, AppointmentsRepository, IAppointmentsRepository } from '../Repositories/AppointmentsRepository';

export class CreateAppointments {

  protected RepositoryStrategy: IAppointmentsRepository;

  constructor(RepositoryStrategy: IAppointmentsRepository = new AppointmentsRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(AppointmentsProps: IAppointments): Promise<Appointments> {

    const Appointments = appointments.create(AppointmentsProps);

    if (Appointments instanceof ErrorApp) {
      throw new Error('Appointments not created, invalid props');
    }

    const AppointmentsStorage = await this.RepositoryStrategy.create(Appointments);

    if (!AppointmentsStorage) {
      throw new Error('Appointments not created into storage');
    }

    return Appointments;
  }

}