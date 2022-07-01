import { CreateAppointments } from './Services/CreateAppointments';
import { v4 as uuidv4 } from 'uuid';

(async () => {

  const createAppointments = new CreateAppointments();

  await createAppointments.create({
    id: `${uuidv4()}`,
    idClient: 'c2e1160e-6bca-4a18-9291-94d04f243160',
    idService: 'c8fd6b87-fab0-4418-97ea-3deff0baa63b',
    Day: 1,
    Month: 2,
    Year: 2022,
    Hour: "09:50"
  });
})();