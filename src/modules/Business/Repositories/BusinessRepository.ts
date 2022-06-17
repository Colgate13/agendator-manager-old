import { business } from '../Domain/Business';
import { IBusinessRepository } from '../Interfaces/IRepositories/index';
export { IBusinessRepository } from '../Interfaces/IRepositories/index';
import { PrismaClient, Business } from '../infra/Prisma';
export { Business } from '../infra/Prisma';
import { ErrorsDb } from '../../../shared/Errors/ErrorsDb';

export class BusinessRepository implements IBusinessRepository{
    private prisma: PrismaClient;
    
    constructor(ClinetDbStrategy: PrismaClient = new PrismaClient()) {
        this.prisma = ClinetDbStrategy;
    }

    async create(business: business): Promise<Business | ErrorsDb> {
        const Business = await this.prisma.business.create({
            data: {
                id: business.id,
                CompanyName: business.CompanyName,
                Cpf_cnpj: business.Cpf_cnpj,
                Name: business.Name,
                Domain: business.Domain,
                MailDefault: business.MailDefault,
                MailSuport: business.MailSuport,
                MailPagament: business.MailPagament,
                MailNoreply: business.MailNoreply
            }
        });

        if (!Business) {
            return new ErrorsDb('Business not created', 3);
        }

        return Business;
    }

    
}