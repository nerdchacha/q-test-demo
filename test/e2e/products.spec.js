const factory = require('../factory')
const products = require('../../app/dal/products');
const { expect } = require('chai')

describe('get available products only', () => {
  before(async () => {
    const availableProducts = factory.createList(3, 'product').map((p) => Object.assign(p, { available: true }));
    const unavailableProducts = factory.createList(7, 'product').map((p) => Object.assign(p, { available: false }));;
    const mockProductsRequest = [...availableProducts, ...unavailableProducts].map((product) => {
      products.create(product);
    })
    await Promise.all(mockProductsRequest);
  })

  after(() => {
    // clean up here
  })

  it('should get only available products', async () => {
    const response = await global.server.get('/');
    const body = response.body
    expect(body.length).to.equal(3)
  })
});