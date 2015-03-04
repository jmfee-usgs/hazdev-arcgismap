/* global chai, describe, it */
'use strict';

var expect = chai.expect,
    ArcGISMap = require('arcgismap/ArcGISMap');


describe('ArcGISMap class tests', function () {
  
  describe('factory', function () {
    it('is defined', function () {
      expect(typeof ArcGISMap).to.equal('function');
    });
  });

});
