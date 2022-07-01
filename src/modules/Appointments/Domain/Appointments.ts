import { IAppointments } from '../Interfaces/Domain';
export { IAppointments } from '../Interfaces/Domain';
import { ErrorApp } from '../../../shared/Errors/Errors';

export class appointments {
  public id: string;
  public idClient: string;
  public idService: string;
  public Day: number;
  public Month: number;
  public Year: number;
  public Hour: string;
  public Status: number;

  private constructor(Appointments: IAppointments) {
    this.id = Appointments.id;
    this.idClient = Appointments.idClient;
    this.idService = Appointments.idService;
    this.Day = Appointments.Day;
    this.Month = Appointments.Month;
    this.Year = Appointments.Year;
    this.Hour = Appointments.Hour;
    this.Status = Appointments.Status;
  }

  public static create(Appointments: IAppointments): appointments | ErrorApp {

    if (Appointments.id.length <= 5) {
      return new ErrorApp("Id must be greater than 5 characters");
    }

    return new appointments(Appointments);
  }
}