import { listPurchase } from '../services/purchase';

async function getPurchases() {
  return listPurchase();
}

module.exports = {
  getPurchases,
};
