import { IAppointments, IAppointmentsClass, IAppointmentsCreate, ServiceAppointment, ISetStartTime } from './IAppointments';
export { IAppointments, IAppointmentsClass, IAppointmentsCreate, ServiceAppointment, ISetStartTime } from './IAppointments';

export class Appointments implements IAppointmentsClass {

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

  constructor(IAppointmentsCreate: IAppointmentsCreate, ServiceAppointment: ServiceAppointment) {

    this.id = IAppointmentsCreate.id;
    this.idClient = IAppointmentsCreate.idClient;
    this.idService = IAppointmentsCreate.idService;
    this.Year = IAppointmentsCreate.Year;
    this.Day = IAppointmentsCreate.Day;
    this.Month = IAppointmentsCreate.Month;
    this.Hour = IAppointmentsCreate.Hour;
    this.Status = IAppointmentsCreate.Status || 1;

    this.SetDates(ServiceAppointment);
  }

  public GetData(): IAppointments {
    return {
      id: this.id,
      idClient: this.idClient,
      idService: this.idService,
      Year: this.Year,
      Day: this.Day,
      Month: this.Month,
      Hour: this.Hour,
      Status: this.Status,
      StartTime: this.StartTime,
      EndTime: this.EndTime
    }
  }

  SetDates(ServiceAppointment: ServiceAppointment, ISetStartTimeProps: ISetStartTime = {
    Day: this.Day,
    Hour: this.Hour,
    Month: this.Month,
    Year: this.Year
  }): string {

    this.Year = ISetStartTimeProps.Year;
    this.Day = ISetStartTimeProps.Day;
    this.Month = ISetStartTimeProps.Month;
    this.Hour = ISetStartTimeProps.Hour;

    const HourTime = Number(this.Hour.split(':')[0]);
    const MinutesTime = Number(this.Hour.split(':')[1]);

    this.StartTime = String(
      new Date(
        this.Year,
        this.Month - 1,
        this.Day,
        HourTime,
        MinutesTime,
        0,
        0
      )
    );
    this.SetEndTime(HourTime, MinutesTime, ServiceAppointment);
    return this.StartTime;
  }


  SetEndTime(HourTime: number, MinutesTime: number, ServiceAppointment: ServiceAppointment): string {

    this.EndTime = String(
      new Date(
        this.Year,
        this.Month - 1,
        this.Day,
        (HourTime + ServiceAppointment.HourDuration),
        (MinutesTime + ServiceAppointment.MinutesDuration),
        0,
        0
      )
    );

    return this.EndTime;
  }

}