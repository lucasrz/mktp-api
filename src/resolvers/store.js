import { createStore, updateStore } from '../services/store';

async function newStore(data) {
  if (!data.args.store.name) {
    throw new Error('Missing store name');
  }

  if (!data.args.store.fee) {
    data.args.store.fee = 10;
  }

  return createStore(data.args.store);
}

async function editStore(data) {
  return updateStore(data.args.store, data.args.storeId);
}

module.exports = {
  newStore,
  editStore,
};
