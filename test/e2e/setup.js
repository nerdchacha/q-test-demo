const mongoose = require('mongoose')
const prepare = require('mocha-prepare');
const config = require('config')
const request = require('supertest');

const server = require('../../app')

prepare(
  (done) => {
    mongoose.connect(`mongodb://localhost:27017/${config.get('dbName')}`, (e) => {
      if (e) { console.log(e) }
      global.server = request(server);
      done()
    });
  },
  (done) => {
    done();
    process.exit();
  }
)
