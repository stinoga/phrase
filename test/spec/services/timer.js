'use strict';

describe('Service: timer', function () {

  // load the service's module
  beforeEach(module('phraseApp'));

  // instantiate service
  var timer;
  beforeEach(inject(function (_timer_) {
    timer = _timer_;
  }));

  it('should do something', function () {
    expect(!!timer).toBe(true);
  });

});
