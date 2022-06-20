import { Business } from "@prisma/client";
import { ErrorsDb } from "../../../../shared/Errors/ErrorsDb";
import { IBusiness } from "../IDomain/index";

export interface IBusinessRepository{
    create(business: IBusiness): Promise<Business | ErrorsDb>;
}