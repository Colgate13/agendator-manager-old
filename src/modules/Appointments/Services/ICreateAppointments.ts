import { Appointments, AppointmentsRepository, IAppointmentsRepository } from '../Repositories/AppointmentsRepository';
import { IErrorApp } from '../../../shared/Errors/Errors';

export interface CreateAppointmentsServiceClass {
  create(AppointmentsProps: ICreateAppointmentsProps): Promise<Appointments | IErrorApp>;
}

export interface ICreateAppointmentsProps {
  id: string;
  idClient: string;
  idService: string;
  Year: number;
  Day: number;
  Month: number;
  Hour: string;
}