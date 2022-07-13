import { IAppointmentsRepository, IFindAppointment } from './IAppointmentsRepository';
import { PrismaClient, Appointments } from '../../../shared/infra/Prisma';

import { ErrorsDb } from '../../../shared/Errors/ErrorsDb';

export { IAppointmentsRepository } from './IAppointmentsRepository';
export { Appointments } from '../../../shared/infra/Prisma';

export class AppointmentsRepository implements IAppointmentsRepository {
  public orm: PrismaClient;

  constructor(ClinetDbStrategy: PrismaClient = new PrismaClient()) {
    this.orm = ClinetDbStrategy;
  }

  async create(appointments: Appointments): Promise<Appointments | ErrorsDb> {
    const Appointment = await this.orm.appointments.create({
      data: appointments
    });

    if (!Appointment) {
      return new ErrorsDb('Appointments not created', 3);
    }

    return Appointment;
  }

  async findAppointments(Props: IFindAppointment): Promise<Appointments[]> {
    return this.orm.appointments.findMany({
      where: {
        Day: Props.Day,
        Month: Props.Month,
        Year: Props.Year,
        Service: {
          idUser: Props.Service.idUser
        }
      }
    })
  }
}