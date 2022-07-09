export interface IAppointmentsClass {
  SetDates(ServiceAppointment: ServiceAppointment, ISetStartTimeProps: ISetStartTime): string;
  SetEndTime(HourTime: number, MinutesTime: number, ServiceAppointment: ServiceAppointment): string;
}

export interface IAppointments {
  id: string;
  idClient: string;
  idService: string;
  Year: number;
  Day: number;
  Month: number;
  Hour: string;
  Status: number;
  StartTime: string;
  EndTime: string;
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

