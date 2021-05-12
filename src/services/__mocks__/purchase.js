const purchases = [
  {
    userPaid: 10,
    storeAmount: 9,
    mktAmount: 0.9,
    paymentSystemAmount: 0.1,
    storeId: 1,
    productid: 1,
  },
  {
    userPaid: 25,
    storeAmount: 22.5,
    mktAmount: 2.25,
    paymentSystemAmount: 0.25,
    storeId: 1,
    productid: 2,
  },
];

const listPurchase = () => {
  return purchases;
};

const createPurchase = (purchase) => {
  return purchase;
};

module.exports = {
  listPurchase,
  createPurchase,
};
