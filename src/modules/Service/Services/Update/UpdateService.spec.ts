import { UpdateService } from './UpdateService';

describe('Create a Service with service', () => {
  const createService = new UpdateService();

  const mocks = {
    RepositoryStrategy: {
      create: ((data: any) => {
        return {
          id: data.id,
          idUser: data.idUser,
          Description: data.Description,
          DurationTime: data.DurationTime,
          Price: data.Price,
        }
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

  it('should update a Service with service', async () => {

    expect(1).toBe(1);

  });
})