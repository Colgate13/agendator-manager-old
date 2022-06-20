import { Agenda } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";
import { IAgenda } from "../Domain";

export interface IAgendaRepository {
  create(user: IAgenda): Promise<Agenda | ErrorsDb>;
}