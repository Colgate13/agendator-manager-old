import { appointments, IAppointments } from './Appointments';
import { ErrorApp } from '../../../shared/Errors/Errors';

describe('Appointments', () => {
  it('should be create a Appointments', () => {

    const AppointmentsProps: IAppointments = {
      id: '123456789',
      idClient: '123456789',
      idService: '123456789',
      Day: 1,
      Month: 1,
      Year: 2023,
      Hour: '20:00',
      Status: 0
    }

    const Appointments = appointments.create(AppointmentsProps);

    if (Appointments instanceof ErrorApp) {
      throw new Error('Appointments not created -------- ERROR');
    }

    expect(Appointments.id).toEqual('123456789');
    expect(Appointments.idClient).toEqual('123456789');
    expect(Appointments.idService).toEqual('123456789');
  });
})