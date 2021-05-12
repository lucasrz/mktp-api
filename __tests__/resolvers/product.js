jest.mock('../../src/services/product');
jest.mock('../../src/services/purchase');
jest.mock('../../src/services/store');
import {
  buyProduct,
  calculateShare,
  isInt,
  getProducts,
  newProduct,
  removeProduct,
  editProduct,
} from '../../src/resolvers/product';

it('Should calculate the right amount for each part for the given value and fee', () => {
  const firstResult = calculateShare(10, 10);
  expect(firstResult.storeAmount).toBe(9);
  expect(firstResult.mktAmount).toBe(0.9);
  expect(firstResult.paymentSystemAmount).toBe(0.1);

  const secondResult = calculateShare(500, 50);
  expect(secondResult.storeAmount).toBe(250);
  expect(secondResult.mktAmount).toBe(245);
  expect(secondResult.paymentSystemAmount).toBe(5);

  const thirdResult = calculateShare(10000000, 10);
  expect(thirdResult.storeAmount).toBe(9000000);
  expect(thirdResult.mktAmount).toBe(900000);
  expect(thirdResult.paymentSystemAmount).toBe(100000);
});

it('Shouldnt calculate if value or fee is missing', () => {
  try {
    const result = calculateShare(null, 10);
  } catch (e) {
    expect(e.message).toBe('Data missing for share calculation');
  }

  try {
    const result = calculateShare(10, null);
  } catch (e) {
    expect(e.message).toBe('Data missing for share calculation');
  }

  try {
    const result = calculateShare(0, 10);
  } catch (e) {
    expect(e.message).toBe('Data missing for share calculation');
  }

  try {
    const result = calculateShare(10, 0);
  } catch (e) {
    expect(e.message).toBe('Data missing for share calculation');
  }
});

it('Should create a purchase for item id 1', async () => {
  const data = {
    args: { productid: 1 },
  };
  const result = await buyProduct(data);
  expect(result.userPaid).toBe(10);
  expect(result.storeAmount).toBe(9);
  expect(result.paymentSystemAmount).toBe(0.1);
  expect(result.mktAmount).toBe(0.9);
  expect(result.storeId).toBe(1);
  expect(result.productid).toBe(1);
});

it('Should create a purchase for item id 2', async () => {
  const data = {
    args: { productid: 2 },
  };
  const result = await buyProduct(data);
  expect(result.userPaid).toBe(25);
  expect(result.storeAmount).toBe(22.5);
  expect(result.paymentSystemAmount).toBe(0.25);
  expect(result.mktAmount).toBe(2.25);
  expect(result.storeId).toBe(1);
  expect(result.productid).toBe(2);
});

it('Should return true if value is int', () => {
  const result = isInt(1);
  expect(result).toBe(true);
});

it('Should return false if value is not int', () => {
  const result = isInt(1.25);
  expect(result).toBe(false);
});

it('Should list all products', async () => {
  const result = await getProducts();
  expect(result.length).toBe(2);
  expect(result[0].id).toBe(1);
  expect(result[0].name).toBe('teste1');
  expect(result[0].price).toBe(10);
  expect(result[0].storeId).toBe(1);
  expect(result[0].enabled).toBe(true);

  expect(result[1].id).toBe(2);
  expect(result[1].name).toBe('teste2');
  expect(result[1].price).toBe(25);
  expect(result[1].storeId).toBe(1);
  expect(result[1].enabled).toBe(true);
});

it('Should create a product', async () => {
  const data = {
    args: {
      product: {
        name: 'test1231231',
        price: 2412312315,
        storeId: 1312312312,
        enabled: true,
      },
    },
  };
  const result = await newProduct(data);
  expect(result.name).toBe('test1231231');
  expect(result.price).toBe(2412312315);
  expect(result.storeId).toBe(1312312312);
  expect(result.enabled).toBe(true);
});

it('Should remove a product', async () => {
  const data = {
    args: {
      productid: 1,
    },
  };

  const result = await removeProduct(data);
  expect(result.id).toBe(1);
  expect(result.name).toBe('teste1');
  expect(result.price).toBe(10);
  expect(result.storeId).toBe(1);
  expect(result.enabled).toBe(false);
});

it('Should update a product', async () => {
  const data = {
    args: {
      productid: 1,
    },
    product: {
      name: 'test1231231',
      price: 2412312315,
      storeId: 1312312312,
      enabled: true,
    },
  };

  const result = await editProduct(data);
  expect(result).toBe(true);
});
