import { IAppointments, IAppointmentsClass, IAppointmentsCreate, ServiceAppointment, ISetStartTime } from './IAppointments';
import { AppointmentsAbstract } from './AppointmentsAbstract';
export { IAppointments, IAppointmentsClass, IAppointmentsCreate, ServiceAppointment, ISetStartTime } from './IAppointments';


export class Appointments extends AppointmentsAbstract implements IAppointmentsClass {

  public StartTime: string = '';
  public EndTime: string = '';

  constructor(IAppointmentsCreate: IAppointmentsCreate, ServiceAppointment: ServiceAppointment) {
    super(IAppointmentsCreate);

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