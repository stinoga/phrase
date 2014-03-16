'use strict';

describe('Service: geturl', function () {

  // load the service's module
  beforeEach(module('phraseApp'));

  // instantiate service
  var geturl;
  beforeEach(inject(function (_geturl_) {
    geturl = _geturl_;
  }));

  it('should do something', function () {
    expect(!!geturl).toBe(true);
  });

});
