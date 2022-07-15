import { Appointments, IAppointmentsCreate } from './Appointments';

describe('Test Appointment Core domain', () => {

  let fakeDates: IAppointmentsCreate = {
    id: '1234',
    idClient: '12312313',
    idService: '31231231231',
    Year: 2022,
    Day: 1,
    Month: 5,
    Hour: '20:00'
  };

  const serviceFake = {
    HourDuration: 1,
    MinutesDuration: 1,
  }

  it('Should to create a instance for appoitments and get datas', async () => {


    const appointments = new Appointments(fakeDates, serviceFake);

    fakeDates.Status = 1;
    fakeDates.StartTime = "Sun May 01 2022 20:00:00 GMT-0300 (Brasilia Standard Time)";
    fakeDates.EndTime = "Sun May 01 2022 21:01:00 GMT-0300 (Brasilia Standard Time)";

    expect(JSON.stringify(appointments.GetData())).toBe(JSON.stringify(fakeDates));

  })

})



