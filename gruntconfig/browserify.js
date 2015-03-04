'use strict';

var config = require('./config');


var browserify = {
  options: {
    browserifyOptions: {
      debug: true,
      paths: [
      ]
    }
  },
  // source bundle
  index: {
    src: [],
    dest: config.build + '/' + config.src + '/hazdev-arcgismap.js',
    options: {
      alias: [
        './' + config.src + '/arcgismap/ArcGISMap.js:arcgismap/ArcGISMap'
      ]
    }
  },
  // test bundle
  test: {
    src: config.test + '/test.js',
    dest: config.build + '/' + config.test + '/test.js',
    options: {
      external: ['arcgismap/ArcGISMap']
    }
  }
};


module.exports = browserify;
