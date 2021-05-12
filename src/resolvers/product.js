import {
  createProduct,
  updateProduct,
  deleteProduct,
  listProducts,
} from '../services/product';
import { getStore } from '../services/store';
import { getProduct } from '../services/product';
import { createPurchase } from '../services/purchase';

async function buyProduct(data) {
  const product = await getProduct(data.args.productid);
  if (!product) {
    throw new Error('Product not found');
  }

  const store = await getStore(product.storeId);
  if (!store) {
    throw new Error('Store not found');
  }

  const share = calculateShare(product.price, store.fee);
  const purchase = {
    userPaid: product.price,
    storeAmount: share.storeAmount,
    mktAmount: share.mktAmount,
    paymentSystemAmount: share.paymentSystemAmount,
    storeId: product.storeId,
    productid: data.args.productid,
  };

  return createPurchase(purchase);
}

function isInt(n) {
  return n % 1 === 0;
}

function calculateShare(value, fee) {
  if (!value || !fee) {
    throw new Error('Data missing for share calculation');
  }
  try {
    const result = {
      mktAmount: ((fee - 1) / 100) * value,
      storeAmount: ((100 - fee) / 100) * value,
      paymentSystemAmount: (1 / 100) * value,
    };

    result.mktAmount = isInt(result.mktAmount)
      ? result.mktAmount
      : parseFloat(result.mktAmount.toFixed(2));

    result.storeAmount = isInt(result.storeAmount)
      ? result.storeAmount
      : parseFloat(result.storeAmount.toFixed(2));

    result.paymentSystemAmount = isInt(result.paymentSystemAmount)
      ? result.paymentSystemAmount
      : parseFloat(result.paymentSystemAmount.toFixed(2));

    return result;
  } catch (e) {
    console.log('e', e);
  }
}

async function newProduct(data) {
  return createProduct(data.args.product);
}

async function removeProduct(data) {
  return deleteProduct(data.args.productid);
}

async function editProduct(data) {
  return updateProduct(data.args.productid, data.args.product);
}

async function getProducts() {
  return listProducts();
}

module.exports = {
  newProduct,
  editProduct,
  removeProduct,
  getProducts,
  buyProduct,
  calculateShare,
  isInt,
};
