import { business as Business, IBusiness } from './Business';
import { ErrorApp } from '../../../shared/Errors/Errors';

describe('Business', () => { 
    it('should be create a Business', () => { 

        const BusinessProps: IBusiness = {
            id: '123456789',
            Name: 'Teste Business',
            CompanyName: 'Teste S.A',
            Cpf_cnpj: '450.870.500-69',
            Domain: '',
            MailDefault: '',
            MailSuport: '',
            MailPagament: '',
            MailNoreply: ''
        }

        const business = Business.create(BusinessProps);

        if (business instanceof ErrorApp) { 
            throw new Error('Business not created -------- ERROR');
        }

        expect(business.id).toEqual('123456789');
        expect(business.Cpf_cnpj).toEqual('450.870.500-69');
        expect(business.Name).toEqual('Teste Business');
        expect(business.CompanyName).toEqual('Teste S.A');
        expect(business.Domain).toEqual('');
        expect(business.MailDefault).toEqual('');
        expect(business.MailSuport).toEqual('');
        expect(business.MailPagament).toEqual('');
        expect(business.MailNoreply).toEqual('');
    });

    it('should dont create a Business because id is invalid', () => { 

        const BusinessProps: IBusiness = {
            id: '123',
            Name: 'Teste Business',
            CompanyName: 'Teste S.A',
            Cpf_cnpj: '450.870.500-69',
            Domain: '',
            MailDefault: '',
            MailSuport: '',
            MailPagament: '',
            MailNoreply: ''
        }

        expect(
            Business.create(BusinessProps)
        ).toBeInstanceOf(ErrorApp);
    });

    it('should dont create a Business because Cpf_Cnpj is invalid', () => { 

        const BusinessProps: IBusiness = {
            id: '123312313',
            Name: 'Teste Teste',
            CompanyName: 'Teste S.A',
            Cpf_cnpj: '',
            Domain: '',
            MailDefault: '',
            MailSuport: '',
            MailPagament: '',
            MailNoreply: ''
        }

        expect(
            Business.create(BusinessProps)
        ).toBeInstanceOf(ErrorApp);
    });
})