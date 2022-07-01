import { CreateClient } from './Services/CreateClient';
import { v4 as uuidv4 } from 'uuid';

(async () => {

  const createClient = new CreateClient();

  await createClient.create({
    id: `${uuidv4()}`,
    idBusiness: 'eb0bb3f4-c96c-475b-8053-7e2f005f5d3e',
    Address: 'Rua central Av1234',
    Balance: 0,
    Birthday: '13-05-2004',
    CheckMail: true,
    Email: 'gabreil@gmail.com',
    Name: 'Gabriel Carlos',
    Password: '1234566789',
    Phone: '5563984656505'
  });
})();