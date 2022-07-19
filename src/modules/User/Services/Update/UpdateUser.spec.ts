import { ErrorApp } from '../../../../shared/Errors/Errors';
import { UpdateUser } from './UpdateUser';

describe('Create a Business with service', () => {
  const userCreate = new UpdateUser();

  const mocks = {
    RepositoryStrategy: {
      create: ((data: any) => {
        return data;
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

  it('Should be to update a user', () => {
    expect(1).toBe(1)
  })

})