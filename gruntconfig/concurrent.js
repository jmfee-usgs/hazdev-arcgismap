'use strict';


var concurrent = {
  scripts: [
    'browserify',
    'jshint:scripts',
    'copy:build'
  ],
  tests: [
    'browserify:test',
    'jshint:tests',
    'copy:test'
  ],
  build: [
    'browserify',
    'compass:dev',
    'copy:build',
    'copy:test',
    'jshint:scripts',
    'jshint:tests'
  ],
  dist: [
    'copy:dist',
    'cssmin',
    'uglify'
  ]
};


module.exports = concurrent;
