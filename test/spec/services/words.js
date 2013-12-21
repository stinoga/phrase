'use strict';

describe('Service: Words', function () {

  // load the service's module
  beforeEach(module('phraseApp'));

  // instantiate service
  var Words;
  beforeEach(inject(function (_Words_) {
    Words = _Words_;
  }));

  it('should do something', function () {
    expect(!!Words).toBe(true);
  });

});
