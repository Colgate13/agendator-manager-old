import { User } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";
import { IUser } from "../Domain/index";

export interface IUserRepository {
  create(user: IUser): Promise<User | ErrorsDb>;
}