import { User } from "@prisma/client";
import { ErrorApp } from "../../../../shared/Errors/Errors";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";

export interface IUserRepository {
  create(user: User): Promise<User | ErrorsDb | ErrorApp>;
}