import { PrismaClient, User } from "@prisma/client";
import { ErrorApp } from "../../../../shared/Errors/Errors";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";

export interface IUserRepository {
  orm: PrismaClient;
  create(user: User): Promise<User | ErrorsDb | ErrorApp>;
}