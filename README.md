# Marketplace API

This is a marketplace API management

## Installation

Use the node package manager [npm](https://www.npmjs.com/get-npm) to install dependencies and run the project. After the installation just run the following command on your terminal.

```bash
npm i
```

## Running

To start the application just run the following command.

```bash
npm run start
```

This will start application at: http://localhost:4000

## Testing

```bash
npm run test
```

This will run all the tests

## Usage

This API uses graphQL, you should be able execute query and mutations at: http://localhost:4000/graphql
These are the mutations and querys you can use:

```
query {
  getProducts {
    id
    name
    enabled
    price
    storeId
  }

  getPurchases {
    userPaid
    storeAmount
    mktAmount
    paymentSystemAmount
    storeId
    product {
      name
      price
      enabled
    }
  }
}

mutation {
  buyProduct(productid: 1) {
    userPaid
    storeAmount
    mktAmount
    paymentSystemAmount
    storeId
    productid
  }
  newStore(store: { name: "test", fee: 50 }) {
    id
    name
    fee
  }

  editStore(store: { fee: 4 }, storeId: 3)

  newProduct(
    product: { name: "testProduct", price: 100, storeId: 1, enabled: true }
  ) {
    id
    name
    price
    storeId
    enabled
  }

  editProduct(
    product: { name: "tfp", price: 1, storeId: 1, enabled: true }
    productid: 13
  )

  removeProduct(productid: 14)
}


```
