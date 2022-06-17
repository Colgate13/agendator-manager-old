import { IBusiness } from '../Interfaces/Domain/index';
export { IBusiness } from '../Interfaces/Domain/index';
import { ErrorApp } from '../../../shared/Errors/Errors';

export class business {
    protected _id: string;
    protected _Name: string;
    protected _CompanyName: string;
    protected _Cpf_cnpj: string;
    protected _Domain: string;
    protected _MailDefault: string;
    protected _MailSuport: string;
    protected _MailPagament: string;
    protected _MailNoreply: string;
    
    private constructor(BusinessProps: IBusiness) {
        this._id = BusinessProps.id;
        this._Name = BusinessProps.Name;
        this._CompanyName = BusinessProps.CompanyName;
        this._Cpf_cnpj = BusinessProps.Cpf_cnpj;
        this._Domain = BusinessProps.Domain || "";
        this._MailDefault = BusinessProps.MailDefault || "";
        this._MailSuport = BusinessProps.MailSuport || "";
        this._MailPagament = BusinessProps.MailPagament || "";
        this._MailNoreply = BusinessProps.MailNoreply || "";
    }

    public static create(BusinessProps: IBusiness): business | ErrorApp { 

        if (BusinessProps.id.length <= 5) { 
            return new ErrorApp('Business id is required', 1);
        }
        if (!BusinessProps.Cpf_cnpj) { 
            return new ErrorApp('Business Name is required', 2);
        }

        return new business(BusinessProps);
    }

    get id(): string {
        return this._id;
    }

    get Name(): string {
        return this._Name;
    }

    get CompanyName(): string {
        return this._CompanyName;
    }

    get Cpf_cnpj(): string {
        return this._Cpf_cnpj;
    }

    get Domain(): string {
        return this._Domain;
    }

    get MailDefault(): string {
        return this._MailDefault;
    }

    get MailSuport(): string {
        return this._MailSuport;
    }

    get MailPagament(): string {
        return this._MailPagament;
    }

    get MailNoreply(): string {
        return this._MailNoreply;
    }
}