import { IAgendaRepository } from '../Interfaces/Repositories';
import { agenda } from '../Domain/Agenda';
import { ErrorsDb } from '../../../shared/Errors/ErrorsDb';
import { Agenda } from '../../../shared/infra/Prisma';
import { PrismaClient } from '../../../shared/infra/Prisma';
export { Agenda } from '../../../shared/infra/Prisma';
export { IAgendaRepository } from '../Interfaces/Repositories';

export class AgendaRepository implements IAgendaRepository {
  private prisma: PrismaClient;

  constructor(ClinetDbStrategy: PrismaClient = new PrismaClient()) {
    this.prisma = ClinetDbStrategy;
  }

  async create(agenda: agenda): Promise<Agenda | ErrorsDb> {
    const Agenda = await this.prisma.agenda.create({
      data: {
        id: agenda.id,
        idBusiness: agenda.idBusiness,
        idUser: agenda.idUser,
        Name: agenda.Name,
        Colors: agenda.Colors,
      }
    });

    if (!Agenda) {
      return new ErrorsDb('Agenda not created', 3);
    }

    return Agenda;
  }


}