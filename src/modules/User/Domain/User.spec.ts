import { user, IUser } from './User';
import { ErrorApp } from '../../../shared/Errors/Errors';

describe('User', () => {
  it('should be create a User', () => {

    const UserProps: IUser = {
      id: '123456789',
      idUserPermission: 1,
      Name: 'Teste User',
      Birthday: '01/01/2000',
      Cpf_cnpj: '450.870.500-69',
      Phone: '+55 (63) 998405656505',
      Email: 'user@gmail.com',
      Password: '1234567987'
    }

    const User = user.create(UserProps);

    if (User instanceof ErrorApp) {
      throw new Error('User not created -------- ERROR');
    }

    expect(User.id).toEqual('123456789');
    expect(User.idUserPermission).toEqual(1);
    expect(User.Name).toEqual('Teste User');
    expect(User.Birthday).toEqual('01/01/2000');
    expect(User.Cpf_cnpj).toEqual('450.870.500-69');
    expect(User.Phone).toEqual('+55 (63) 998405656505');
    expect(User.Email).toEqual('user@gmail.com');
    expect(User.Password).toEqual('1234567987');

  });

  it('should a not create a User because id is invalid', () => {

    const userProps: IUser = {
      id: '12',
      idUserPermission: 1,
      Name: 'Teste User',
      Birthday: '123456789',
      Cpf_cnpj: '450.870.500-69',
      Phone: '123456789',
      Email: 'user@gmail.com',
      Password: '123456789'
    }

    expect(
      user.create(userProps)
    ).toBeInstanceOf(ErrorApp);

  });
})