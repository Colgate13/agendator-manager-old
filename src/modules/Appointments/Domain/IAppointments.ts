export interface IAppointmentsClass {
  SetDates(ServiceAppointment: ServiceAppointment, ISetStartTimeProps: ISetStartTime): string;
  SetEndTime(HourTime: number, MinutesTime: number, ServiceAppointment: ServiceAppointment): string;
}

export interface IAppointmentsCreate {
  id: string;
  idClient: string;
  idService: string;
  Year: number;
  Day: number;
  Month: number;
  Hour: string;
  Status?: number;
  StartTime?: string;
  EndTime?: string;
}

export interface IAppointments extends IAppointmentsCreate {
  StartTime: string;
  EndTime: string;
}

export interface ISetStartTime {
  Year: number;
  Month: number;
  Day: number;
  Hour: string;
}

export interface ServiceAppointment {
  HourDuration: number;
  MinutesDuration: number;
}

export interface ISetEndTime extends ServiceAppointment { }

