const logManager = require('./logger');

logManager.logger.info()

const add = (a, b) => a + b;

const toUpperCase = (input) => {
  return input ? input.toUpperCase() : ''
}

module.exports = {
  add,
  toUpperCase
}