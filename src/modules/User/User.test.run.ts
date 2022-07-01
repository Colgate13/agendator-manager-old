import { CreateUser } from './Services/CreateUser';

(async () => {

  const createUser = new CreateUser();

  await createUser.create({
    idUserPermission: 1,
    Name: 'Franncy Neya Brasil Feitosa',
    Birthday: '07-10-1978',
    Cpf_cnpj: '65143480094',
    Phone: '5563984082891',
    Email: 'franncy@gmail.com',
    Password: '123456789'
  });
})();