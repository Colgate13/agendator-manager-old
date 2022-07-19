import { Client, PrismaClient } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";

export interface IClientRepository {
  orm: PrismaClient;
  create(user: Client): Promise<Client | ErrorsDb>;
}