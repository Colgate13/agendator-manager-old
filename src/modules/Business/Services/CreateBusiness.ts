import { ErrorApp } from '../../../shared/Errors/Errors';
import { business } from '../Domain/Business';
import { BusinessRepository, IBusinessRepository, Business } from '../Repositories/BusinessRepository';
import { IBusiness } from '../Interfaces/Domain/index';

export class CreateBusiness {

    protected RepositoryStrategy: IBusinessRepository;

    constructor(RepositoryStrategy: IBusinessRepository = new BusinessRepository()) { 
        this.RepositoryStrategy = RepositoryStrategy;
    }

    async create(businessProps: IBusiness): Promise<Business> { 

        const Business = business.create(businessProps);

        if (Business instanceof ErrorApp) { 
            throw new Error('Business not created, invalid props');
        }

        const BusinessStorage = await this.RepositoryStrategy.create(Business);

        if (!BusinessStorage) {
            throw new Error('Business not created into storage');
        }

        return Business;
    }

}