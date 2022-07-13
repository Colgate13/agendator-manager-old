import { Appointments, PrismaClient } from "@prisma/client";
import { ErrorsDb } from "../../../shared/Errors/ErrorsDb";

export interface IFindAppointment {
  Day: number,
  Month: number,
  Year: number,
  Service: {
    idUser: string
  }
}

export interface IAppointmentsRepository {
  orm: PrismaClient;
  create(Appointments: Appointments): Promise<Appointments | ErrorsDb>;
  findAppointments(Props: IFindAppointment): Promise<Appointments[]>
}
