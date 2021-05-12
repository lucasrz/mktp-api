import { EntitySchema } from 'typeorm';
import Store from '../model/store';

module.exports = new EntitySchema({
  name: 'Store',
  target: Store,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    fee: {
      type: 'int',
    },
  },
});
