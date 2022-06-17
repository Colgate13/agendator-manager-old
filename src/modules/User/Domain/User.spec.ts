import { User, IUser } from './User';
import { ErrorApp } from '../../../shared/Errors/Errors';

describe('User', () => { 
    it('should be create a User', () => { 

        const UserProps: IUser = {
            id: '123456789',
            idBusiness: '123456789',
            idUserPermission: 1,
            Name: 'Teste User',
            Birthday: '01/01/2000',
            Cpf_cnpj: '450.870.500-69',
            Phone: '+55 (63) 998405656505',
            Email: 'user@gmail.com',
            Password: '1234567987'
        }

        const user = User.create(UserProps);

        if (user instanceof ErrorApp) { 
            throw new Error('User not created -------- ERROR');
        }

        expect(user.id).toEqual('123456789');
        expect(user.idBusiness).toEqual('123456789');
        expect(user.idUserPermission).toEqual(1);
        expect(user.Name).toEqual('Teste User');
        expect(user.Birthday).toEqual('01/01/2000');
        expect(user.Cpf_cnpj).toEqual('450.870.500-69');
        expect(user.Phone).toEqual('+55 (63) 998405656505');
        expect(user.Email).toEqual('user@gmail.com');
        expect(user.Password).toEqual('1234567987');
        
    });
})