import { CreateBusiness } from './CreateBusiness';

describe('Create a Business with service', () => { 
    const createBusiness = new CreateBusiness();

    const mocks = {
        RepositoryStrategy: {
            create: ((data: any) => { 
                return {
                    id: data.id,
                    Name: data.Name,
                    CompanyName: data.CompanyName,
                    Cpf_cnpj: data.Cpf_cnpj,
                    Domain: data.Domain || '',
                    MailDefault: data.MailDefault || '',
                    MailSuport: data.MailSuport || '',
                    MailPagament: data.MailPagament || '',
                    MailNoreply: data.MailNoreply || ''
                }
            })
        }
    }

    const mocks2 = {
        RepositoryStrategy: {
            create: ((data: any) => { 
                return null
            })
        }
    }

    it('should create a business with service', async () => {

        const creatingBusiness = await createBusiness.create.apply(mocks, [{
            id: '123456789',
            Name: 'Teste Business',
            CompanyName: 'Teste S.A',
            Cpf_cnpj: '450.870.500-69',
            Domain: '',
            MailDefault: '',
            MailSuport: '',
            MailPagament: '',
            MailNoreply: ''
        }]);

        expect(creatingBusiness.id).toBe('123456789');

    });

    it('should not create a business with service because id invalid', async () => {


        try {
            const creatingBusiness = await createBusiness.create.apply(mocks, [{
                id: '12',
                Name: 'Teste Business',
                CompanyName: 'Teste S.A',
                Cpf_cnpj: '450.870.500-69',
                Domain: '',
                MailDefault: '',
                MailSuport: '',
                MailPagament: '',
                MailNoreply: ''
            }]);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

    });

    it('should not create a business with service because db dont create', async () => {


        try {
            const creatingBusiness = await createBusiness.create.apply(mocks2, [{
                id: '12123123123',
                Name: 'Teste Business',
                CompanyName: 'Teste S.A',
                Cpf_cnpj: '450.870.500-69',
                Domain: '',
                MailDefault: '',
                MailSuport: '',
                MailPagament: '',
                MailNoreply: ''
            }]);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

    });
})