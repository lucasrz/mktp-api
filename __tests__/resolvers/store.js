jest.mock('../../src/services/store');
import { newStore, editStore } from '../../src/resolvers/store';

it('Should create a new sotre with default fee', async () => {
  const data = {
    args: {
      store: {
        name: 'test',
      },
    },
  };
  const result = await newStore(data);
  expect(result.name).toBe('test');
  expect(result.fee).toBe(10);
});

it('Should create a new sotre with custom fee', async () => {
  const data = {
    args: {
      store: {
        name: 'test2',
        fee: 57,
      },
    },
  };
  const result = await newStore(data);
  expect(result.name).toBe('test2');
  expect(result.fee).toBe(57);
});

it('Should edit a store', async () => {
  const data = {
    args: {
      store: {
        name: 'newTestName',
        fee: 5,
      },
      storeId: 1,
    },
  };
  const result = await editStore(data);
  expect(result.name).toBe('newTestName');
  expect(result.fee).toBe(5);
});
