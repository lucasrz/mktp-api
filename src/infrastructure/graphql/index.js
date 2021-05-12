import { getPurchases } from '../../resolvers/purchase';
import {
  getProducts,
  newProduct,
  removeProduct,
  editProduct,
  buyProduct,
} from '../../resolvers/product';
import { editStore, newStore } from '../../resolvers/store';

const resolvers = {
  Query: {
    getPurchases: (parent, args, context, info) => getPurchases({ args }),
    getProducts: (parent, args, context, info) => getProducts({ args }),
  },
  Mutation: {
    newStore: (parent, args, context, info) => newStore({ args }),
    editStore: (parent, args, context, info) => editStore({ args }),
    buyProduct: (parent, args, context, info) => buyProduct({ args }),
    newProduct: (parent, args, context, info) => newProduct({ args }),
    removeProduct: (parent, args, context, info) => removeProduct({ args }),
    editProduct: (parent, args, context, info) => editProduct({ args }),
  },
};

module.exports = resolvers;
