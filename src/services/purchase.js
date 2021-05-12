import { getRepository } from '../infrastructure/database';

async function createPurchase(Purchase) {
  try {
    const purchaseRepository = await getRepository('Purchase');
    return purchaseRepository.save(Purchase);
  } catch (e) {
    console.log('e', e);
  }
}

async function listPurchase() {
  try {
    const purchaseRepository = await getRepository('Purchase');
    const result = await purchaseRepository.query(
      'SELECT * FROM purchase INNER JOIN Product ON purchase.productid = product.id'
    );

    const resArray = [];
    result.forEach((r) => {
      resArray.push({
        userPaid: r.userPaid,
        storeAmount: r.storeAmount,
        mktAmount: r.mktAmount,
        paymentSystemAmount: r.paymentSystemAmount,
        storeId: r.storeId,
        product: {
          price: r.price,
          name: r.name,
          enabled: r.enabled,
        },
      });
    });
    return resArray;
  } catch (e) {
    console.log('e', e);
  }
}

module.exports = {
  createPurchase,
  listPurchase,
};
