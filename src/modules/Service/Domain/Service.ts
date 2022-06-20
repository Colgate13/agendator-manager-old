import { IService } from '../Interfaces/Domain';
export { IService } from '../Interfaces/Domain';
import { ErrorApp } from '../../../shared/Errors/Errors';

export class service {

  protected _id: string
  protected _idBusiness: string
  protected _idUser: string
  protected _agendaId: string
  protected _Description: string
  protected _DurationTime: string
  protected _Price: string

  private constructor(service: IService) {
    this._id = service.id
    this._idBusiness = service.idBusiness
    this._idUser = service.idUser
    this._agendaId = service.agendaId
    this._Description = service.Description
    this._DurationTime = service.DurationTime
    this._Price = service.Price
  }

  public static create(serviceProps: IService): service | ErrorApp {

    if (serviceProps.id.length <= 5) {
      return new ErrorApp('id is required');
    }

    return new service(serviceProps);
  }

  public get id(): string {
    return this._id
  }

  public get idBusiness(): string {
    return this._idBusiness
  }

  public get idUser(): string {
    return this._idUser
  }

  public get agendaId(): string {
    return this._agendaId
  }

  public get Description(): string {
    return this._Description
  }

  public get DurationTime(): string {
    return this._DurationTime
  }

  public get Price(): string {
    return this._Price
  }

}