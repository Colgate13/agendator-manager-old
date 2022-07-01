import { IAppointmentsRepository, IfindAppointmens } from '../Interfaces/Repositories';
import { PrismaClient, Appointments } from '../../../shared/infra/Prisma';

import { ErrorsDb } from '../../../shared/Errors/ErrorsDb';

export { IAppointmentsRepository } from '../Interfaces/Repositories';
export { Appointments } from '../../../shared/infra/Prisma';

export class AppointmentsRepository implements IAppointmentsRepository {
  public orm: PrismaClient;

  constructor(ClinetDbStrategy: PrismaClient = new PrismaClient()) {
    this.orm = ClinetDbStrategy;
  }

  async create(appointments: Appointments): Promise<Appointments | ErrorsDb> {
    const Appointments = await this.orm.appointments.create({
      data: appointments
    });

    if (!Appointments) {
      return new ErrorsDb('Appointments not created', 3);
    }

    return Appointments;
  }

  async findAppointments(Props: IfindAppointmens): Promise<Appointments[]> {
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