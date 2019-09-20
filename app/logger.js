const logger = {
  debug: () => console.log('Adding debug'),
  error: () => console.log('Adding error'),
  info: () => console.log('Adding info'),
  warning: () => console.log('Adding warning'),
  log: () => console.log('Adding log'),
};

module.exports = { logger }