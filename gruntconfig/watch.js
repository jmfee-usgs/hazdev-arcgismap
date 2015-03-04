'use strict';

var config = require('./config');

var watch = {
  scripts: {
    files: [config.src + '/**/*.js'],
    tasks: [
      'concurrent:scripts',
      'mocha_phantomjs'
    ]
  },
  tests: {
    files: [
      config.test + '/**/*.html',
      config.test + '/**/*.js'
    ],
    tasks: [
      'concurrent:tests',
      'mocha_phantomjs'
    ]
  },
  scss: {
    files: [config.src + '/**/*.scss'],
    tasks: ['compass:dev']
  },
  example: {
    files: [config.example + '/**/*'],
    options: {
      livereload: true
    }
  },
  build: {
    files: [config.build + '/**/*'],
    options: {
      livereload: true
    }
  },
  gruntfile: {
    files: [
      'Gruntfile.js',
      'gruntconfig/**/*.js'
    ],
    tasks: ['jshint:gruntfile']
  }
};

module.exports = watch;
