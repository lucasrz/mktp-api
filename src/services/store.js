import { getRepository } from '../infrastructure/database';

async function createStore(store) {
  const storeRepository = await getRepository('Store');
  return storeRepository.save(store);
}

async function updateStore(store, storeId) {
  const storeRepository = await getRepository('Store');
  try {
    const res = await storeRepository
      .createQueryBuilder()
      .update('Store')
      .set({ ...store })
      .where('id = :id', { id: storeId })
      .execute();

    return !!res.affected;
  } catch (e) {
    console.log('e', e);
  }
}

async function getStore(storeId) {
  const storeRepository = await getRepository('Store');
  return storeRepository.findOne({ id: storeId });
}

module.exports = {
  createStore,
  updateStore,
  getStore,
};
