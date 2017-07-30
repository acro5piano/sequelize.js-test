// const app = require('../../app')

module.exports = function (app) {
  app.use('/', require('./welcome'));
  app.use('/users', require('./users'));
}

// app.use('/', require('./welcome'));
// app.use('/users', require('./users'));
