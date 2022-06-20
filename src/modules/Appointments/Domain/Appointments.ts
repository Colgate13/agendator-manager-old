import { IAppointments } from '../Interfaces/Domain';
export { IAppointments } from '../Interfaces/Domain';
import { ErrorApp } from '../../../shared/Errors/Errors';

export class appointments {
  protected _id: string;
  protected _idBusiness: string;
  protected _agendaId: string;
  protected _idClient: string;
  protected _Data: string;
  protected _Request: boolean;
  protected _serviceId: string;

  private constructor(Appointments: IAppointments) {
    this._id = Appointments.id;
    this._idBusiness = Appointments.idBusiness;
    this._agendaId = Appointments.agendaId;
    this._idClient = Appointments.idClient;
    this._serviceId = Appointments.serviceId || "0";
    this._Data = Appointments.Data;
    this._Request = Appointments.Request;
  }

  public static create(Appointments: IAppointments): appointments | ErrorApp {

    if (Appointments.id.length <= 5) {
      return new ErrorApp("Id must be greater than 5 characters");
    }

    return new appointments(Appointments);
  }

  public get id(): string {
    return this._id;
  }

  public get idBusiness(): string {
    return this._idBusiness;
  }

  public get agendaId(): string {
    return this._agendaId;
  }

  public get idClient(): string {
    return this._idClient;
  }

  public get serviceId(): string {
    return this._serviceId;
  }

  public get Data(): string {
    return this._Data;
  }

  public get Request(): boolean {
    return this._Request;
  }

}