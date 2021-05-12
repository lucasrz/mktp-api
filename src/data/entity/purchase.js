import { EntitySchema } from 'typeorm';
import Purchase from '../model/purchase';

module.exports = new EntitySchema({
  name: 'Purchase',
  target: Purchase,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    userPaid: {
      type: 'numeric',
    },
    storeAmount: {
      type: 'numeric',
    },
    mktAmount: {
      type: 'numeric',
    },
    paymentSystemAmount: {
      type: 'numeric',
    },
    storeId: {
      type: 'int',
    },
    productid: {
      type: 'int',
    },
  },
  relations: {
    categories: {
      type: 'one-to-one',
      target: 'Product',
    },
  },
});
