import { IAppointmentsCreate } from './IAppointments';

export abstract class AppointmentsAbstract {

  public id: string = '';
  public idClient: string = '';
  public idService: string = '';
  public Year: number = 1;
  public Day: number = 1;
  public Month: number = 1;
  public Hour: string = '';
  public Status: number = 1;
  public StartTime: string = '';
  public EndTime: string = '';

  constructor(IAppointmentsCreate: IAppointmentsCreate) {
    this.id = IAppointmentsCreate.id;
    this.idClient = IAppointmentsCreate.idClient;
    this.idService = IAppointmentsCreate.idService;
    this.Year = IAppointmentsCreate.Year;
    this.Day = IAppointmentsCreate.Day;
    this.Month = IAppointmentsCreate.Month;
    this.Hour = IAppointmentsCreate.Hour;
    this.Status = IAppointmentsCreate.Status || 1;
    this.StartTime = IAppointmentsCreate.StartTime || '';
    this.EndTime = IAppointmentsCreate.EndTime || '';
  }
}