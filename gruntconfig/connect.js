'use strict';

var config = require('./config');


var connect = {
  options: {
    hostname: '*'
  },

  dev: {
    options: {
      base: [
        config.build + '/' + config.src,
        config.example
      ],
      port: 8000,
      open: 'http://localhost:8000/example.html',
      livereload: true
    }
  },
  test: {
    options: {
      base: [
        config.build + '/' + config.src,
        config.build + '/' + config.test,
        'node_modules'
      ],
      port: 8001,
      open: 'http://localhost:8001/test.html',
      livereload: true
    }
  },
  dist: {
    options: {
      base: [
        config.dist,
        config.example
      ],
      port: 8002,
      open: 'http://localhost:8002/example.html',
      keepalive: true
    }
  }
};


module.exports = connect;
