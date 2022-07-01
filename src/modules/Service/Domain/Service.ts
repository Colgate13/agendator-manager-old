import { IService } from '../Interfaces/Domain';
export { IService } from '../Interfaces/Domain';
import { ErrorApp } from '../../../shared/Errors/Errors';

export class service {

  public id: string
  public idUser: string
  public Description: string
  public DurationTime: number
  public Price: number

  private constructor(service: IService) {
    this.id = service.id
    this.idUser = service.idUser
    this.Description = service.Description
    this.DurationTime = service.DurationTime
    this.Price = service.Price
  }

  public static create(serviceProps: IService): service | ErrorApp {

    if (serviceProps.id.length <= 5) {
      return new ErrorApp('id is required');
    }

    return new service(serviceProps);
  }

}