const faker = require('faker');
const chai = require('chai');
const factories = require('chai-js-factories');
const merge = require('deepmerge');

chai.use(factories);

chai.factory.define('product', (data = {}) => {
  const mock = {
    name: faker.random.words(2),
    type: faker.random.words(1),
    price: faker.random.number(),
    rating: faker.random.number(),
    warranty_years: faker.random.number(),
    available: faker.random.boolean(),
  };
  return merge(mock, data);
});

module.exports = chai.factory

