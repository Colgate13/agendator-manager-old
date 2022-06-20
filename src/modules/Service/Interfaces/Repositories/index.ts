import { Service } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";
import { IService } from "../Domain";

export interface IServiceRepository {
  create(user: IService): Promise<Service | ErrorsDb>;
}