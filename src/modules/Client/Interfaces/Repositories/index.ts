import { Client } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";

export interface IClientRepository {
  create(user: Client): Promise<Client | ErrorsDb>;
}