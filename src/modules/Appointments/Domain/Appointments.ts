import { IAppointments, IAppointmentsClassAbstract, IAppointmentsCreate, ServiceAppointment, ISetStartTime } from './IAppointments';

export class Appointments implements IAppointmentsClassAbstract {

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

  private constructor(IAppointmentsCreateProps: IAppointmentsCreate) {

  }

  public static create(IAppointmentsProps: IAppointments, ServiceAppointmentProps: ServiceAppointment): Promise<any> {


    const a: any = 1;
    return a;
  }

  SetStartTime(ISetStartTimeProps: ISetStartTime): Date {
    return new Date();
  }


  SetEndTime(ISetStartTimeProps: ISetStartTime): Date {
    return new Date();
  }

}