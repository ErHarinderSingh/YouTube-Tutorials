const functions = require('firebase-functions');

const faker = require('faker');
// Initialize products array
const products = [];

// Max number of products
const LIMIT = 100;

// Push a new product to the array
for (let i = 0; i < LIMIT; i++) {
  products.push({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  });
}

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

exports.listProducts = functions.https.onCall((data, context) => {
  return products;
});
