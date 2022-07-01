import { appointments } from '../Domain/Appointments';
import { IAppointmentsRepository } from '../Interfaces/Repositories';
import { PrismaClient, Appointments } from '../../../shared/infra/Prisma';
import { ErrorsDb } from '../../../shared/Errors/ErrorsDb';
export { IAppointmentsRepository } from '../Interfaces/Repositories';
export { Appointments } from '../../../shared/infra/Prisma';

export class AppointmentsRepository implements IAppointmentsRepository {
  private prisma: PrismaClient;

  constructor(ClinetDbStrategy: PrismaClient = new PrismaClient()) {
    this.prisma = ClinetDbStrategy;
  }

  async create(appointments: Appointments): Promise<Appointments | ErrorsDb> {
    const Appointments = await this.prisma.appointments.create({
      data: appointments
    });

    if (!Appointments) {
      return new ErrorsDb('Appointments not created', 3);
    }

    return Appointments;
  }
}