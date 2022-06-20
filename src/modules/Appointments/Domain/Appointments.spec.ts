import { appointments, IAppointments } from './Appointments';
import { ErrorApp } from '../../../shared/Errors/Errors';

describe('Appointments', () => {
  it('should be create a Appointments', () => {

    const AppointmentsProps: IAppointments = {
      id: '123456789',
      idBusiness: '123456789',
      agendaId: '123456789',
      idClient: '123456789',
      serviceId: '123456789',
      Data: '13-05-2020 10:00 AM',
      Request: false
    }

    const Appointments = appointments.create(AppointmentsProps);

    if (Appointments instanceof ErrorApp) {
      throw new Error('Appointments not created -------- ERROR');
    }

    expect(Appointments.id).toEqual('123456789');
    expect(Appointments.idBusiness).toEqual('123456789');
    expect(Appointments.agendaId).toEqual('123456789');
    expect(Appointments.idClient).toEqual('123456789');
    expect(Appointments.serviceId).toEqual('123456789');
    expect(Appointments.Data).toEqual('13-05-2020 10:00 AM');
    expect(Appointments.Request).toEqual(false);
  });
})