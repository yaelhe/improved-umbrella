const server = require('./server');

exports.config = {
  framework: 'jasmine',
  specs: ['test/**/*.spec.js'],
  plugins: [{
    path: 'index.js'
  }],
  onPrepare() {
    return server.start();
  }
};