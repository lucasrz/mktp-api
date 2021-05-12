import { getRepository } from '../infrastructure/database';

async function listProducts() {
  try {
    const productRepository = await getRepository('Product');
    return productRepository.find();
  } catch (e) {
    console.log('e', e);
  }
}

async function getProduct(productid) {
  try {
    const productRepository = await getRepository('Product');
    return productRepository.findOne({ id: productid });
  } catch (e) {
    console.log('e', e);
  }
}

async function createProduct(product) {
  try {
    const productRepository = await getRepository('Product');
    return productRepository.save(product);
  } catch (e) {
    console.log('e', e);
  }
}

async function deleteProduct(productid) {
  const productRepository = await getRepository('Product');
  try {
    const res = await productRepository
      .createQueryBuilder()
      .update('Product')
      .set({ enabled: false })
      .where('id = :id', { id: productid })
      .execute();

    return !!res.affected;
  } catch (e) {
    console.log('e', e);
  }
}

async function updateProduct(productid, product) {
  const productRepository = await getRepository('Product');
  try {
    const res = await productRepository
      .createQueryBuilder()
      .update('Product')
      .set({ ...product })
      .where('id = :id', { id: productid })
      .execute();

    return !!res.affected;
  } catch (e) {
    console.log('e', e);
  }
}

module.exports = {
  listProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
};
