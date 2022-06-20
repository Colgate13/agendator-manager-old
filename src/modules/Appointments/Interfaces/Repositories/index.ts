import { Appointments } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";
import { IAppointments } from "../Domain";

export interface IAppointmentsRepository {
  create(Appointments: IAppointments): Promise<Appointments | ErrorsDb>;
}