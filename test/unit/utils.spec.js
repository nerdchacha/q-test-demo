const { expect } = require('chai')
const utils = require('../../app/utils')

describe('add', () => {
  it('should add two numbers', () => {
    const result = utils.add(2, 3)
    expect(result).to.equal(5)
  })
})