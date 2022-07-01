import { User } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";

export interface IUserRepository {
  create(user: User): Promise<User | ErrorsDb>;
}