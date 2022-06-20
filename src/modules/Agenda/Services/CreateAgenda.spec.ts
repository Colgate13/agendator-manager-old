import { CreateAgenda } from './CreateAgenda';

describe('Create a Agenda with services', () => {
  const agendaCreate = new CreateAgenda();

  const mocks = {
    RepositoryStrategy: {
      create: ((data: any) => {
        return {
          id: data.id,
          idBusiness: data.idBusiness,
          idUser: data.idUser,
          Name: data.Name,
          Colors: data.Colors,
        };
      })
    }
  }

  const mocks2 = {
    RepositoryStrategy: {
      create: ((data: any) => {
        return null
      })
    }
  }

  it('should create a agenda with service', async () => {

    const creatingAgenda = await agendaCreate.create.apply(mocks, [{
      id: "123456789",
      idBusiness: "123456789",
      idUser: "123456789",
      Name: "Teste Agenda",
      Colors: "#000000",
    }]);

    expect(creatingAgenda.id).toBe('123456789');

  });
})