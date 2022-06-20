import { ErrorApp } from '../../../shared/Errors/Errors';
import { IAgenda } from '../Interfaces/Domain';
export { IAgenda } from '../Interfaces/Domain';


export class agenda {

  protected _id: string
  protected _idBusiness: string
  protected _idUser: string
  protected _Name: string
  protected _Colors: string

  private constructor(agenda: IAgenda) {
    this._id = agenda.id
    this._idBusiness = agenda.idBusiness
    this._idUser = agenda.idUser
    this._Name = agenda.Name
    this._Colors = agenda.Colors
  }

  public static create(agendaProps: IAgenda): agenda {

    if (agendaProps.id.length <= 5) {
      throw new ErrorApp('Agenda not created -------- ERROR');
    }

    return new agenda(agendaProps)
  }

  get id(): string {
    return this._id
  }

  get idBusiness(): string {
    return this._idBusiness
  }

  get idUser(): string {
    return this._idUser
  }

  get Name(): string {
    return this._Name
  }

  get Colors(): string {
    return this._Colors
  }
}