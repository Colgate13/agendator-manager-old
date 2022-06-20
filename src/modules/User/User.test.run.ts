import { CreateUser } from './Services/CreateUser';

(async () => {

  const createUser = new CreateUser();

  await createUser.create({
    id: '123456789',
    idBusiness: '123456789',
    idUserPermission: 1,
    Name: 'Teste User',
    Birthday: '123456789',
    Cpf_cnpj: '450.870.500-69',
    Phone: '123456789',
    Email: 'user@gmail.com',
    Password: '123456789'
  });
})();