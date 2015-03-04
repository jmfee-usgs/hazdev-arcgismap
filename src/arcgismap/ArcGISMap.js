'use strict';


var ArcGISMap = function (options) {
  var _this,
      _initialize;

  _this = Object.create({});

  _initialize = function () {
    document.querySelector('body').appendChild(
        document.createElement('h1')).innerHTML = 'Hello World';
    options = null;
  };

  _initialize();
  return _this;
};


module.exports = ArcGISMap;
