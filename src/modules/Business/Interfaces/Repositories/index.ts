import { Business } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";
import { IBusiness } from "../Domain/index";

export interface IBusinessRepository{
    create(business: IBusiness): Promise<Business | ErrorsDb>;
}