import { EntitySchema } from 'typeorm';
import Product from '../model/product';

module.exports = new EntitySchema({
  name: 'Product',
  target: Product,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    price: {
      type: 'numeric',
    },
    storeId: {
      type: 'int',
    },
    enabled: {
      type: 'boolean',
    },
  },
});
