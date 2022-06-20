import { ErrorApp } from '../../../shared/Errors/Errors';
import { agenda } from '../Domain/Agenda';
import { Agenda, AgendaRepository, IAgendaRepository } from '../Repositories/AgendaRepository';
import { IAgenda } from '../Interfaces/Domain';

export class CreateAgenda {

  protected RepositoryStrategy: IAgendaRepository;

  constructor(RepositoryStrategy: IAgendaRepository = new AgendaRepository()) {
    this.RepositoryStrategy = RepositoryStrategy;
  }

  async create(agendaProps: IAgenda): Promise<Agenda> {

    const Agenda = agenda.create(agendaProps);

    if (Agenda instanceof ErrorApp) {
      throw new Error('Agenda not created, invalid props');
    }

    const AgendaStorage = await this.RepositoryStrategy.create(Agenda);

    if (!AgendaStorage) {
      throw new Error('Agenda not created into storage');
    }

    return Agenda;
  }

}