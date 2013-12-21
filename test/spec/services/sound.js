'use strict';

describe('Service: Sound', function () {

  // load the service's module
  beforeEach(module('phraseApp'));

  // instantiate service
  var Sound;
  beforeEach(inject(function (_Sound_) {
    Sound = _Sound_;
  }));

  it('should do something', function () {
    expect(!!Sound).toBe(true);
  });

});
