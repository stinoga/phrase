'use strict';

describe('Service: score', function () {

  // load the service's module
  beforeEach(module('phraseApp'));

  // instantiate service
  var score;
  beforeEach(inject(function (_score_) {
    score = _score_;
  }));

  it('should do something', function () {
    expect(!!score).toBe(true);
  });

});
