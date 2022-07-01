import { CreateAppointments } from './Services/CreateAppointments';
import { v4 as uuidv4 } from 'uuid';

(async () => {

  const createAppointments = new CreateAppointments();

  await createAppointments.create({
    id: `${uuidv4()}`,
    idBusiness: 'eb0bb3f4-c96c-475b-8053-7e2f005f5d3e',
    agendaId: '230ad0fa-1e6a-46d1-a40c-df531db54482',
    idClient: '5dfa7751-c075-4bcf-bbc3-a8dc27368a30',
    serviceId: 'abc86a15-05ea-46d9-96a1-7ecf8671d518',
    Data: '28-06-2022 20:00',
    Request: false
  });
})();