const product = require('./model/product')

const create = (data) => {
  const newProduct = product({ ...data });
  return newProduct.save();
}

const get = () => {
  return new Promise((resolve, reject) => {
    product.find({}, (e, products) => {
      if (e) { reject(e) }
      resolve(products)
    });
  })
}

const getAvailable = () => {
  return new Promise((resolve, reject) => {
    product.find({ available: true }, (e, products) => {
      if (e) { reject(e) }
      resolve(products)
    });
  })
}

module.exports = {
  create,
  get,
  getAvailable
}