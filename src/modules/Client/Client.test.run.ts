import { CreateClient } from './Services/Create/CreateClient';
import { v4 as uuidv4 } from 'uuid';

(async () => {

  const createClient = new CreateClient();

  await createClient.create({
    id: `${uuidv4()}`,
    Birthday: '13-05-2004',
    Email: 'gabreil@gmail.com',
    Name: 'Gabriel Carlos',
    Password: '1234566789',
    Phone: '5563984656505'
  });
})();