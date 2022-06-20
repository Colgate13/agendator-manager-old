import { CreateBusiness } from './Services/CreateBusiness';

(async () => {

  const createBusiness = new CreateBusiness();

  await createBusiness.create({
    id: '123456789',
    Name: 'Teste S.a',
    CompanyName: 'Teste S.a',
    Cpf_cnpj: '06348154157',
    Domain: 'testesa.com',
    MailDefault: 'testesa@gmail.com',
    MailNoreply: '',
    MailPagament: '',
    MailSuport: "",
  });
})();