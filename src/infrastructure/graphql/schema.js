const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    storeId: Int
    enabled: Boolean
  }

  input ProductInput {
    name: String!
    price: Float!
    storeId: Int!
    enabled: Boolean!
  }

  type Store {
    id: ID!
    name: String!
    products: [Product]
    fee: Int
  }

  input StoreInput {
    name: String
    fee: Int
  }

  type Purchase {
    userPaid: Float!
    storeAmount: Float!
    mktAmount: Float!
    paymentSystemAmount: Float!
    storeId: Int
    productid: Int!
    product: Product
  }

  type Query {
    getPurchases: [Purchase]
    getProducts: [Product]
  }

  type Mutation {
    newStore(store: StoreInput!): Store
    editStore(store: StoreInput!, storeId: Int!): String
    buyProduct(productid: ID!): Purchase
    newProduct(product: ProductInput!): Product
    removeProduct(productid: Int!): Boolean
    editProduct(product: ProductInput!, productid: ID!): Boolean
  }
`;

module.exports = typeDefs;
