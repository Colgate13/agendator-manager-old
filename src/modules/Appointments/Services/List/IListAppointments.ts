export interface IListAppointment {
  id?: string,
  idUser?: string,
  idService?: string,
  idClient?: string,
  interval: {
    Year: number,
    Day: number,
    Month: number,
  }
}