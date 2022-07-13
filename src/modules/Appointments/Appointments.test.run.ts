import { CreateAppointments } from './Services/Create/CreateAppointments';
import { v4 as uuidv4 } from 'uuid';

(async () => {

  const createAppointments = new CreateAppointments();

  await createAppointments.create({
    id: `${uuidv4()}`,
    idClient: 'a679b76b-d794-4b20-9e59-b2abb3d3c914',
    idService: '221342e4-65c2-4e94-9080-7a5a5289dc60',
    Day: 1,
    Month: 2,
    Year: 2022,
    Hour: "09:50"
  });
})();