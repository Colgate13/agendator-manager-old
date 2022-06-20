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

  async create(appointments: appointments): Promise<Appointments | ErrorsDb> {
    const Appointments = await this.prisma.appointments.create({
      data: {
        id: appointments.id,
        idBusiness: appointments.idBusiness,
        agendaId: appointments.agendaId,
        idClient: appointments.idClient,
        serviceId: appointments.serviceId || "0",
        Data: appointments.Data,
        Request: appointments.Request
      }
    });

    if (!Appointments) {
      return new ErrorsDb('Appointments not created', 3);
    }

    return Appointments;
  }
}