import { Client } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";
import { IClient } from "../Domain/index";

export interface IClientRepository {
  create(user: IClient): Promise<Client | ErrorsDb>;
}