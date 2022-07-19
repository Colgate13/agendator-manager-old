import { PrismaClient, Service } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";

export interface IServiceRepository {
  orm: PrismaClient;
  create(user: Service): Promise<Service | ErrorsDb>;
}