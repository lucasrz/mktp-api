jest.mock('../../src/services/purchase');
import { getPurchases } from '../../src/resolvers/purchase';

it('Should list purchase', async () => {
  const result = await getPurchases();
  expect(result.length).toBe(2);
  expect(result[0].userPaid).toBe(10);
  expect(result[0].storeAmount).toBe(9);
  expect(result[0].mktAmount).toBe(0.9);
  expect(result[0].paymentSystemAmount).toBe(0.1);
  expect(result[0].storeId).toBe(1);
  expect(result[0].productid).toBe(1);

  expect(result[1].userPaid).toBe(25);
  expect(result[1].storeAmount).toBe(22.5);
  expect(result[1].mktAmount).toBe(2.25);
  expect(result[1].paymentSystemAmount).toBe(0.25);
  expect(result[1].storeId).toBe(1);
  expect(result[1].productid).toBe(2);
});
