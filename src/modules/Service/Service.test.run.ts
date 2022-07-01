import { CreateService } from './Services/CreateService';
import { v4 as uuidv4 } from 'uuid';

(async () => {

  const createService = new CreateService();

  await createService.create({
    id: `${uuidv4()}`,
    idUser: '77abdf6f-8669-436e-9107-cc6e5e59cb2a',
    Description: 'Cabelo unha e pe',
    DurationTime: "02:00",
    Price: 100,
  });
})();