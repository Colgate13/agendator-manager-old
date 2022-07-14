import { CreateService } from './Services/CreateService';
import { v4 as uuidv4 } from 'uuid';

(async () => {

  const createService = new CreateService();

  await createService.create({
    id: `${uuidv4()}`,
    idUser: '589511e7-3d6a-41b6-8fde-ced34e2c7ab0',
    Description: 'Cabelo unha e pe',
    DurationTime: "02:00",
    Price: 100,
  });
})();