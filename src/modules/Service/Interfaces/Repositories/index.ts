import { Service } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";

export interface IServiceRepository {
  create(user: Service): Promise<Service | ErrorsDb>;
}