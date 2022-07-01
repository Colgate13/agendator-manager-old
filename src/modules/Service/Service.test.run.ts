import { CreateService } from './Services/CreateService';
import { v4 as uuidv4 } from 'uuid';

(async () => {

  const createService = new CreateService();

  await createService.create({
    id: `${uuidv4()}`,
    agendaId: '230ad0fa-1e6a-46d1-a40c-df531db54482',
    idBusiness: 'eb0bb3f4-c96c-475b-8053-7e2f005f5d3e',
    idUser: '8efedbcc-894e-4a63-a6c2-f23944a625b9',
    Description: 'Cabelo unha e pe',
    DurationTime: 60,
    Price: 100,
  });
})();