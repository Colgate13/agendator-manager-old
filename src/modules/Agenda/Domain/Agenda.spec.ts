import { agenda, IAgenda } from './Agenda';
import { ErrorApp } from '../../../shared/Errors/Errors';

describe('Agenda', () => {
  it('should be create a Agenda', () => {

    const AgendaProps: IAgenda = {
      id: '123456789',
      idBusiness: '123456789',
      idUser: '123456789',
      Name: 'Agenda',
      Colors: '#000000'
    }

    const Agenda = agenda.create(AgendaProps);

    if (Agenda instanceof ErrorApp) {
      throw new Error('Agenda not created -------- ERROR');
    }

    expect(Agenda.id).toEqual('123456789');
    expect(Agenda.idBusiness).toEqual('123456789');
    expect(Agenda.idUser).toEqual('123456789');
    expect(Agenda.Name).toEqual('Agenda');
    expect(Agenda.Colors).toEqual('#000000');
  });
})