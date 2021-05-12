const products = [
  {
    id: 1,
    name: 'teste1',
    price: 10,
    storeId: 1,
    enabled: true,
  },
  {
    id: 2,
    name: 'teste2',
    price: 25,
    storeId: 1,
    enabled: true,
  },
];

const listProducts = () => {
  return products;
};

const getProduct = (id) => {
  return products[id - 1];
};

const createProduct = (product) => {
  return product;
};

const deleteProduct = (productid) => {
  const deletedProduct = products[productid - 1];
  deletedProduct.enabled = false;
  return deletedProduct;
};

const updateProduct = () => {
  return true;
};

module.exports = {
  listProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
};
