const mock = require('mock-require');

const noop = () => null

mock('../../app/logger', {
  logger: {
    debug: noop,
    error: noop,
    info: noop,
    log: noop,
    warn: noop,
  }
});